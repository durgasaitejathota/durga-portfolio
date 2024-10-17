import { v4 as uuidv4 } from 'uuid';
//import ProjectImg from '../images/projectImg.png';
import PMSImg from '../images/PMS.webp';
import RMSImg from '../images/RMS.jpg';
import ACGImg from '../images/ACG.jpg';
//import CavinImg from '../images/cavinimg.jpg';

import { v4 as uuidv4 } from 'uuid';

export const projects = [
  {
    id: 1,
    name: 'Sapot Systems Inc.',
    description: 'Java Full Stack Developer (July 2023 – Present). Led the development of microservices for Load Configuration and Shift Scheduling, enhancing system scalability by 30%. Integrated a chatbot for dynamic shift management, increasing scheduling accuracy by 25%. Automated testing with JUnit and Mockito, achieving 95% code coverage.',
    image: '/assets/images/SapotSystems.jpg', // Update this image path to match the appropriate image for this work experience
    link: '/projects/sapot-systems'
  },
  {
    id: 2,
    name: 'Tata Consultancy Services',
    description: 'Software Developer (May 2021 – July 2022). Developed a content delivery optimization platform, boosting media retrieval speed by 40%. Enhanced API security using Spring Security and OAuth2, ensuring safe data exchanges. Automated cloud deployments on AWS ECS, achieving 99.9% system uptime.',
    image: '/assets/images/TCS.jpg', // Update this image path to match the appropriate image for this work experience
    link: '/projects/tcs'
  },
  {
    id: 3,
    name: 'Zoron IT Solutions LLP',
    description: 'Java Full Stack Developer (July 2019 – May 2021). Led the development of an Inventory and Order Management System, automating workflows and reducing manual intervention by 40%. Optimized data storage using MongoDB, improving query response time by 25%. Implemented JWT-based authentication for secure API access.',
    image: '/assets/images/ZoronIT.jpg', // Update this image path to match the appropriate image for this work experience
    link: '/projects/zoron-it'
  }
];




export default projects;
