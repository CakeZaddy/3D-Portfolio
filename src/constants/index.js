import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  margaret,
  sunshine,
  favicon,
  realtor,
  photoLibrary,
  dadJokes,
  threejs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Frontend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
]

const experiences = [
  {
    title: 'Baker',
    company_name: 'Margarets Restaurant',
    icon: margaret,
    iconBg: '#383E56',
    date: 'May 2013 - February 2019',
    points: [
      'Baking cakes.',
      'Decorating cakes.',
      'Training and Development of interns.',
      'Managing the bakery section.',
    ],
  },
  {
    title: 'Chief Cake Decorator',
    company_name: 'Sunshine Craft',
    icon: sunshine,
    iconBg: '#E6DEDD',
    date: 'March 2019 - November 2020',
    points: [
      'Cake design creation.',
      'Cake decoration and coordinating.',
      'Dessert cakes making for special events.',
      'Participating in reviews of baked products.',
    ],
  },
  {
    title: 'C.E.O',
    company_name: 'Uncle Sula',
    icon: favicon,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Decided to start my own bakery.',
      'Which are mainly involved in making cakes for events.',
      'Involved in customer relations, marketing, and design creations.',
      'Baked and Decorated cakes.',
    ],
  },
  // {
  //   title: 'Web D',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Realtor Site',
    description:
      'Web-based app that allows users to search for landed properties both for sale and rent from different parts of the world. Users can also post their own properties too.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: realtor,
    source_code_link: 'https://github.com/CakeZaddy/realtor-site-v2',
    site_link: 'https://realtor-site-v2.vercel.app/',
  },
  {
    name: 'Photo Library',
    description:
      'A site that displays loaded pictures and slides them automatically. This is the second course I did from Sahand Ghavidel ',
    tags: [
      {
        name: 'html5',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'js',
        color: 'pink-text-gradient',
      },
    ],
    image: photoLibrary,
    source_code_link: 'https://github.com/CakeZaddy/Image-Rotator',
    site_link: 'https://cakezaddy.github.io/Image-Rotator/',
  },
  {
    name: 'Dad Jokes',
    description:
      'An app that loads new jokes every time you ask for it. This is the first course i did from Sahand Ghavidel udemy course',
    tags: [
      {
        name: 'html5',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'js',
        color: 'pink-text-gradient',
      },
    ],
    image: dadJokes,
    source_code_link: 'https://github.com/CakeZaddy/Dad-Jokes',
    site_link: 'https://cakezaddy.github.io/Dad-Jokes/',
  },
]

export { services, technologies, experiences, testimonials, projects }
