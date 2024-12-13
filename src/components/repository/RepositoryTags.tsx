import React from 'react';
import { Chip } from '../Common';
import IconTag from '../icons/IconTag';

interface RepositoryTagsProps {
  tags: string[];
}

export const RepositoryTags: React.FC<RepositoryTagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip
          key={tag}
          className="text-gray-600"
          $rounded={true}
        >
          <IconTag className='w-4 h-4' />
          {tag}
        </Chip>
      ))}
    </div>
  );
};