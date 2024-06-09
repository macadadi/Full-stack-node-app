import { ApolloError } from "@apollo/client";

export type Book = {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;

}

export type Books = {
  books: Book[];
}

export type queryResponse<T> ={
    loading: boolean;
    error: ApolloError | undefined;
    data: T | undefined;
}
