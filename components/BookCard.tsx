import React from 'react';
import { Book } from '../types.ts';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <a
      href={book.openLibraryUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative pt-[150%]">
        <img
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate group-hover:text-cyan-400 transition-colors" title={book.title}>
          {book.title}
        </h3>
        <p className="text-sm text-slate-400 mt-1 truncate" title={book.authors.join(', ')}>
          {book.authors.join(', ')}
        </p>
        {book.publishYear && (
          <p className="text-xs text-slate-500 mt-2">
            First published in {book.publishYear}
          </p>
        )}
      </div>
    </a>
  );
};