import { SearchBar } from './components/SearchBar';
import { BookList } from './components/BookList';
import { Loader } from './components/Loader';
import { NoResults } from './components/NoResults';
import { Book, SearchType } from './types';
import { searchBooks } from './services/openLibraryService';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [lastSearch, setLastSearch] = useState<{ query: string; type: SearchType } | null>(null);

  const handleSearch = useCallback(async (query: string, type: SearchType) => {
    if (!query.trim()) return;
    
    setLastSearch({ query, type });
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setBooks([]);

    try {
      const results = await searchBooks(query, type);
      setBooks(results);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRetry = useCallback(() => {
    if (lastSearch) {
      handleSearch(lastSearch.query, lastSearch.type);
    }
  }, [lastSearch, handleSearch]);

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <NoResults message={error} onRetry={handleRetry} />;
    }
    if (hasSearched && books.length === 0) {
      return <NoResults message="No books found. Try a different search." />;
    }
    if (books.length > 0) {
      return <BookList books={books} />;
    }
    return (
        <div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-slate-300">Welcome, Alex!</h2>
            <p className="text-slate-400 mt-2">Ready to find your next book? Just type in the search bar above.</p>
        </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-cyan-400">Book</span> Finder
          </h1>
          <p className="text-slate-400 mt-2">Your personal library search engine</p>
        </header>
        
        <div className="sticky top-4 z-10 py-4 bg-slate-900/80 backdrop-blur-sm">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        <div className="mt-8">
          {renderContent()}
        </div>
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
          <p>Powered by the <a href="https://openlibrary.org/developers/api" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">Open Library API</a>.</p>
      </footer>
    </div>
  );
};

export default App;
