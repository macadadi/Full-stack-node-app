import { ApolloError } from "@apollo/client";

export type Book = {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
};

export type Books = {
  books: Book[];
};

export type queryResponse<T> = {
  loading: boolean;
  error: ApolloError | undefined;
  data: T | undefined;
};
export type customPanelTypes = {
  children: ReactNode;
  value: number;
  index: number;
  height?: number | string;
};
export type TabbedComponentProps = {
  children: ExtendButtonBase<TabTypeMap<{}, "div">>[];
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export type EOSearchInputProps = {
  setSearch: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
};

export type ImageLoaderProps = {
  src: string;
  placeholder: string;
  alt: string;
  maxWidth?: string;
  maxHeight?: string;
};

export type SideFilterProps = {
  name: string;
  grade: number;
};

export interface GridProps {
  children: ReactNode;
  isLoading?: boolean;
}

export interface MyObject {
  [key: string]: T;
}

export interface MainAppContext {
  addItem: (item: Book) => void;
  removeItem: (item: Book) => void;
  hasItem: (item: Book) => boolean;
  items: Book[];
  isAdding: boolean;
  isRemoving: boolean;
}
