import React from 'react';

interface NoResultsProps {
  message: string;
  onRetry?: () => void;
}

export const NoResults: React.FC<NoResultsProps> = ({ message, onRetry }) => {
  return (
    <div className="text-center py-10">
      <p className="text-slate-400 text-lg mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500"
          aria-label="Retry search"
        >
          Retry
        </button>
      )}
    </div>
  );
};