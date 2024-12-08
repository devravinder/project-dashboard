import React from 'react';
import { RepositoryCard } from './RepositoryCard';

interface RepositoryGridProps {
  repositories: Repository[];
}

export const RepositoryGrid: React.FC<RepositoryGridProps> = ({ repositories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repositories.map((repo) => (
        <RepositoryCard key={repo.id} repository={repo} />
      ))}
    </div>
  );
};