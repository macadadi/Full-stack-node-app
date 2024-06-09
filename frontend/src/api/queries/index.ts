import { useQuery, gql} from '@apollo/client';
import { Books, queryResponse } from 'types';


const GET_BOOKS = gql`
query GetBooks{
  books{
    author
    coverPhotoURL
    readingLevel
    title
  }
}
`;

const useGetBooks = (): queryResponse<Books>  => {
  const { loading, error, data } = useQuery<Books>(GET_BOOKS);
  return { loading, error, data };
}
export default  useGetBooks