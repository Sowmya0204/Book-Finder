export interface OpenLibraryDoc {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
}

export interface OpenLibraryResponse {
  docs: OpenLibraryDoc[];
  numFound: number;
}

export interface Book {
  key: string;
  title: string;
  authors: string[];
  coverUrl: string;
  publishYear?: number;
  openLibraryUrl: string;
}

export enum SearchType {
  TITLE = 'title',
  AUTHOR = 'author',
}