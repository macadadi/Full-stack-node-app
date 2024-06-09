import { useQuery, gql } from "@apollo/client";
import { Book, Books, queryResponse } from "types";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const useGetBooks = (): queryResponse<Books> => {
  const { loading, error, data } = useQuery<Books>(GET_BOOKS);
  return { loading, error, data };
};

const useFilterBooks = (filter: string): queryResponse<Book[]> => {
  const { loading, error, data } = useGetBooks();
  return {
    loading,
    error,
    data: data?.books.filter(book =>
      book.title.toLowerCase().includes(filter.toLowerCase())
    ),
  };
};

export { useGetBooks, useFilterBooks };
