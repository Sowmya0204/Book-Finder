import React, { useState } from 'react';
import { SearchType } from '../types';
interface SearchBarProps {
  onSearch: (query: string, type: SearchType) => void;
  isLoading: boolean;
}

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
);

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchType>(SearchType.TITLE);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query, searchType);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search for a book by ${searchType}...`}
          className="w-full px-5 py-3 text-lg text-white bg-slate-800 border-2 border-slate-700 rounded-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300"
        />
        <button
          type="submit"
          disabled={isLoading || !query}
          className="absolute inset-y-0 right-0 flex items-center justify-center px-5 text-white bg-cyan-600 rounded-r-full hover:bg-cyan-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? '...' : <SearchIcon />}
        </button>
      </div>
      <div className="flex items-center justify-center space-x-6 text-slate-300">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="searchType"
            value={SearchType.TITLE}
            checked={searchType === SearchType.TITLE}
            onChange={() => setSearchType(SearchType.TITLE)}
            className="form-radio h-4 w-4 text-cyan-600 bg-slate-700 border-slate-600 focus:ring-cyan-500"
          />
          <span>Title</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="searchType"
            value={SearchType.AUTHOR}
            checked={searchType === SearchType.AUTHOR}
            onChange={() => setSearchType(SearchType.AUTHOR)}
            className="form-radio h-4 w-4 text-cyan-600 bg-slate-700 border-slate-600 focus:ring-cyan-500"
          />
          <span>Author</span>
        </label>
      </div>
    </form>
  );
};
