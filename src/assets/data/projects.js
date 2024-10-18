// src/assets/data/projects.js
import { v4 as uuidv4 } from 'uuid'; // Only one instance of this import
// Removed unused image imports

// Update your projects data here
export const projects = [
  {
    id: uuidv4(),
    name: 'Sapot Systems Inc.',
    description: 'Java Full Stack Developer (July 2023 – Present). ...',
    image: '/assets/images/SapotSystemsProject.jpg',
    link: '/projects/sapot-systems',
    moreInfo: 'Additional details about Sapot Systems project...'
  },
  {
    id: uuidv4(),
    name: 'Tata Consultancy Services',
    description: 'Software Developer (May 2021 – July 2022). ...',
    image: '/assets/images/TCSProject.jpg',
    link: '/projects/tcs',
    moreInfo: 'Additional details about TCS project...'
  },
  {
    id: uuidv4(),
    name: 'Zoron IT Solutions LLP',
    description: 'Java Full Stack Developer (July 2019 – May 2021). ...',
    image: '/assets/images/ZoronITProject.jpg',
    link: '/projects/zoron-it',
    moreInfo: 'Additional details about Zoron IT project...'
  }
];


export default projects;
