import React from 'react';
import { Chip } from '../Common';

interface RepositoryTagsProps {
  tags: string[];
}

export const RepositoryTags: React.FC<RepositoryTagsProps> = ({ tags }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip
          key={tag}
          className="text-gray-600"
        >
          #{tag}
        </Chip>
      ))}
    </div>
  );
};