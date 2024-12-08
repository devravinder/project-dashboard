type Technology = {
    name: string;
    icon?: string;
  };
  
type Repository = {
    id: string;
    name: string;
    description: string;
    category: string;
    tags: string[];
    technologies: Technology[];
    websiteUrl?: string;
    repoUrl: string;
  };