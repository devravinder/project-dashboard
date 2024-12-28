
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
  INTERVIEW:'interview',
  WEB_DEVELOPMENT: 'web development',
  MOBILE_DEVELOPMENT: 'mobile development',
  MICROSERVICES: 'microservices',
  BACK_END: 'back-end',
  FRONT_END: 'front-end',
  FULL_STACK: 'full-stack',
  REST:'rest',
  GRAPHQL:'graphql',
  DATABASE:'database',
  CLOUD:'cloud',
  CI_CD:'CI/CD',
  DEV_OPS:'dev-ops',
  STREAMING:'streaming',
  VIDEO_STREAMING:'Video Streaming',
  AUDIO_STREAMING:'Audio Streaming',
  SECURITY: 'Security'
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
  CSS: 'CSS',
  GRPC: 'gRPC',
  EXPRESS_JS: 'Express',
  HONO_JS: 'HonoJs',
  SPRING_BOOT: 'Spring Boot',
  SPRING_SECURITY: 'Spring Security',
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
    name: 'Learn Js (JavaScript & Node.js',
    description: 'Learn JavaScript with examples and exercises',
    category: CATEGORIES.PERSONAL,
    tags: [TAGS.LEARN, TAGS.INTERVIEW, TAGS.WEB_DEVELOPMENT, TAGS.FRONT_END],
    technologies: [
      { name: TECHNOLOGIES.JAVASCRIPT },
      {name: TECHNOLOGIES.NODE_JS}
    ],
    repoUrl: 'https://github.com/devravinder/js-learn',
  },
  {
    id: '3',
    name: 'Learn gRPC',
    description: 'Learn gRPC fundamentals with Todo app in node.js',
    category: CATEGORIES.PERSONAL,
    tags: [TAGS.LEARN, TAGS.BACK_END],
    technologies: [
      { name: TECHNOLOGIES.GRPC },
      {name: TECHNOLOGIES.NODE_JS}
    ],
    repoUrl: 'https://github.com/devravinder/grpc-todo',
  },
  {
    id: '4',
    name: 'Video Streaming App',
    description: 'Learn Video Streaming',
    category: CATEGORIES.PERSONAL,
    tags: [TAGS.LEARN, TAGS.BACK_END, TAGS.FRONT_END, TAGS.FULL_STACK, TAGS.STREAMING, TAGS.VIDEO_STREAMING],
    technologies: [
      { name: TECHNOLOGIES.REACT },
      {name: TECHNOLOGIES.NODE_JS},
      {name:TECHNOLOGIES.TYPESCRIPT},
      {name: TECHNOLOGIES.EXPRESS_JS}
    ],
    repoUrl: 'https://github.com/devravinder/video-streaming',
  },
  {
    id: '5',
    name: 'React Interview',
    description: 'React Interview Questions',
    category: CATEGORIES.PERSONAL,
    tags: [TAGS.LEARN, TAGS.FRONT_END, TAGS.INTERVIEW],
    technologies: [
      { name: TECHNOLOGIES.REACT },
      {name: TECHNOLOGIES.TYPESCRIPT}
    ],
    repoUrl: 'https://github.com/devravinder/react-ts-interview',
  },
  {
    id: '6',
    name: 'Learn Java',
    description: 'Learn Java fundamentals with examples',
    category: CATEGORIES.PERSONAL,
    tags: [TAGS.LEARN, TAGS.BACK_END],
    technologies: [
      { name: TECHNOLOGIES.JAVA },
    ],
    repoUrl: 'https://github.com/devravinder/java-learn',
  },
  {
    id: '7',
    name: 'Learn Spring Boot Security',
    description: 'Learn Spring Boot Security fundamentals with examples',
    category: CATEGORIES.PERSONAL,
    tags: [TAGS.LEARN, TAGS.BACK_END, TAGS.SECURITY],
    technologies: [
      { name: TECHNOLOGIES.JAVA },
      { name: TECHNOLOGIES.SPRING_BOOT},
      { name: TECHNOLOGIES.SPRING_SECURITY}
    ],
    repoUrl: 'https://github.com/devravinder/spring-security-learn',
  },
  {
    id: '8',
    name: 'Learn Spring Boot',
    description: 'Learn Spring Boot fundamentals with examples',
    category: CATEGORIES.PERSONAL,
    tags: [TAGS.LEARN, TAGS.BACK_END],
    technologies: [
      { name: TECHNOLOGIES.JAVA },
      { name: TECHNOLOGIES.SPRING_BOOT},
    ],
    repoUrl: 'https://github.com/devravinder/spring-boot-learn',
  },
];