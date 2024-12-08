
const CATEGORIES = {
  PERSONAL: 'Personal',
  FREELANCE: 'Freelance',
  PROFESSIONAL: 'Professional'
}

const TAGS = {
  E_COMMERECE: 'e-commerce',
  PAYMENTS: 'payments',
  SHOPPING: 'shopping',
  PRODUCTIVITY: 'productivity',
  MANAGEMENT: 'management',
  COLLABORATION: 'collaboration',
  LEARN: 'learn',
  WEB_DEVELOPMENT: 'web development',
  MOBILE_DEVELOPMENT: 'mobile development',
  BACK_END: 'back-end',
  FRONT_END: 'front-end'
}

const TECHNOLOGIES = {
  REACT: 'React',
  TYPESCRIPT: 'TypeScript',
  JAVASCRIPT: 'JavaScript',
  JAVA: 'Java',
  NODE_JS: 'Node.js',
  MONGODB: 'MongoDB',
  FIREBASE: 'Firebase',
  CI_CD: 'CI/CD',
  HTML: 'HTML',
  CSS: 'CSS'
}



export const repositories: Repository[] = [
  {
    id: '1',
    name: 'Projects Dashboard',
    description: 'An application to view all my projects at one place from Github/Bitbucket',
    category: CATEGORIES.PERSONAL,
    tags: [TAGS.MANAGEMENT],
    technologies: [
      { name: TECHNOLOGIES.REACT },
      { name: TECHNOLOGIES.TYPESCRIPT },
      { name: TECHNOLOGIES.JAVASCRIPT },
      { name: TECHNOLOGIES.HTML },
      { name: TECHNOLOGIES.CSS },
      { name: TECHNOLOGIES.CI_CD }

    ],
    websiteUrl: 'https://projects.paravartech.com/',
    repoUrl: 'https://github.com/devravinder/project-dashboard',
  },
  {
    id: '2',
    name: 'Learn Node.js',
    description: 'Learn Node.js with examples and exercises',
    category: CATEGORIES.PERSONAL,
    tags: [TAGS.LEARN, TAGS.WEB_DEVELOPMENT, TAGS.BACK_END],
    technologies: [
      { name: TECHNOLOGIES.NODE_JS }
    ],
    repoUrl: 'https://github.com/devravinder/node-learn',
  }
];