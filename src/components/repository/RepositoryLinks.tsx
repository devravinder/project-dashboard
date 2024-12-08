import React from 'react';
import IconGithub from '../icons/IconGithub';
import IconLink from '../icons/IconLink';
import tw from 'tailwind-styled-components';

interface RepositoryLinksProps {
  repoUrl: string;
  websiteUrl?: string;
}

export const RepositoryLinks: React.FC<RepositoryLinksProps> = ({ repoUrl, websiteUrl }) => {
  return (
    <div className="pt-4 flex flex-row justify-end gap-2">
      <A url={repoUrl}>
        <IconGithub className="h-4 w-4" />
      </A>
      <A url={websiteUrl}>
        <IconLink className="h-4 w-4" />
      </A>
    </div>
  );
};

const Link = tw.a`p-2 rounded-full bg-gray-100 hover:bg-blue-100  flex items-center text-blue-600 hover:text-blue-800`

const A = ({ url, children }: { url?: string, children?: React.ReactNode }) => url ? <Link href={url} target="_blank" rel="noopener noreferrer">{children}</Link> : null