import React from 'react';
import { RepositoryTechnologies } from './RepositoryTechnologies';
import { RepositoryTags } from './RepositoryTags';
import { RepositoryLinks } from './RepositoryLinks';
import { Chip } from '../Common';

interface RepositoryCardProps {
  repository: Repository;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-all">
      <div className="h-full flex flex-col gap-2 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">{repository.name}</h3>
              <Chip>{repository.category}</Chip>
            </div>
            <p className=" text-gray-600 line-clamp-2">{repository.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <RepositoryTechnologies technologies={repository.technologies} />
            <RepositoryTags tags={repository.tags} />
          </div>
        </div>
        <RepositoryLinks repoUrl={repository.repoUrl} websiteUrl={repository.websiteUrl} />
      </div>
    </div>
  );
};