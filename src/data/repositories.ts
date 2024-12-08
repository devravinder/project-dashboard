
const CATEGORIES = {
  WEB_APPLICATIONS:'Web Applications',
  PRODUCTIVITY:'productivity',
}

const TAGS = {
  E_COMMERECE:'e-commerce',
  PAYMENTS:'payments',
  SHOPPING:'shopping',
  PRODUCTIVITY:'productivity',
  MANAGEMENT:'management',
  COLLABORATION:'collaboration'
}

const TECHNOLOGIES = {
  REACT:'React',
  TYPESCRIPT:'TypeScript',
  NODE_JS:'Node.js',
  MONGODB:'MongoDB',
  FIREBASE:'Firebase'
}

const TYPE = {
  PERSONAL:'Personal',
  FREELANCE:'Freelance',
  PROFESSIONAL:'Professional'
}

export const repositories: Repository[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'A full-featured e-commerce solution with cart and payment integration',
    category: CATEGORIES.WEB_APPLICATIONS,
    tags: [TAGS.E_COMMERECE, TAGS.PAYMENTS, TAGS.SHOPPING],
    technologies: [
      { name: TECHNOLOGIES.REACT },
      { name: TECHNOLOGIES.TYPESCRIPT },
      { name: TECHNOLOGIES.NODE_JS },
      { name: TECHNOLOGIES.MONGODB }
      
    ],
    websiteUrl: 'https://example-shop.com',
    repoUrl: 'https://github.com/username/ecommerce',
    type: TYPE.PERSONAL
  },
  {
    id: '2',
    name: 'Task Manager',
    description: 'Project management tool with real-time updates',
    category: CATEGORIES.PRODUCTIVITY,
    tags: [TAGS.PRODUCTIVITY, TAGS.MANAGEMENT, TAGS.COLLABORATION],
    technologies: [
      { name: TECHNOLOGIES.REACT },
      { name: TECHNOLOGIES.TYPESCRIPT },
      { name: TECHNOLOGIES.NODE_JS },
      { name: TECHNOLOGIES.FIREBASE }
    ],
    repoUrl: 'https://bitbucket.org/username/task-manager',
    type: TYPE.PROFESSIONAL
  }
];