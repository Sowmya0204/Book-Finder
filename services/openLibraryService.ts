import { Book, OpenLibraryDoc, OpenLibraryResponse, SearchType } from '../types';

const API_BASE_URL = 'https://openlibrary.org/search.json';
const COVER_BASE_URL = 'https://covers.openlibrary.org/b/id/';

const mapDocToBook = (doc: OpenLibraryDoc): Book => {
  const coverUrl = doc.cover_i
    ? `${COVER_BASE_URL}${doc.cover_i}-L.jpg`
    : 'https://picsum.photos/300/450?grayscale';
    
  return {
    key: doc.key,
    title: doc.title,
    authors: doc.author_name || ['Unknown Author'],
    coverUrl: coverUrl,
    publishYear: doc.first_publish_year,
    openLibraryUrl: `https://openlibrary.org${doc.key}`,
  };
};

export const searchBooks = async (query: string, searchType: SearchType): Promise<Book[]> => {
  if (!query) {
    return [];
  }
  
  const params = new URLSearchParams({ [searchType]: query, limit: '20' });
  const url = `${API_BASE_URL}?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      // Handles server errors (4xx, 5xx)
      throw new Error('Error from book server. Please try again later.');
    }
    const data: OpenLibraryResponse = await response.json();
    return data.docs.map(mapDocToBook);
  } catch (error) {
    console.error("Failed to fetch books:", error);
    // If it's the error we threw, re-throw it. Otherwise, assume a network issue.
    if (error instanceof Error && error.message.startsWith('Error from book server')) {
        throw error;
    }
    throw new Error('Network error. Please check your internet connection.');
  }
};