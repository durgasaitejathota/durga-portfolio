import { v4 as uuidv4 } from 'uuid';
//import ProjectImg from '../images/projectImg.png';
import PMSImg from '../images/PMS.webp';
import RMSImg from '../images/RMS.jpg';
import ACGImg from '../images/ACG.jpg';
//import CavinImg from '../images/cavinimg.jpg';

// Remove any duplicate import statements for uuidv4 if present
// import { v4 as uuidv4 } from 'uuid';

// If you need uuidv4, import it just once

// Update your projects data here
export const projects = [
  {
    id: uuidv4(),
    name: 'Sapot Systems Inc.',
    description: 'Java Full Stack Developer (July 2023 – Present). Led the development of microservices for Load Configuration and Shift Scheduling, enhancing system scalability by 30%. Integrated a chatbot for dynamic shift management, increasing scheduling accuracy by 25%. Automated testing with JUnit and Mockito, achieving 95% code coverage.',
    image: '/assets/images/SapotSystemsProject.jpg', // Updated image path
    link: '/projects/sapot-systems'
  },
  {
    id: uuidv4(),
    name: 'Tata Consultancy Services',
    description: 'Software Developer (May 2021 – July 2022). Developed a content delivery optimization platform, boosting media retrieval speed by 40%. Enhanced API security using Spring Security and OAuth2, ensuring safe data exchanges. Automated cloud deployments on AWS ECS, achieving 99.9% system uptime.',
    image: '/assets/images/TCSProject.jpg', // Updated image path
    link: '/projects/tcs'
  },
  {
    id: uuidv4(),
    name: 'Zoron IT Solutions LLP',
    description: 'Java Full Stack Developer (July 2019 – May 2021). Led the development of an Inventory and Order Management System, automating workflows and reducing manual intervention by 40%. Optimized data storage using MongoDB, improving query response time by 25%. Implemented JWT-based authentication for secure API access.',
    image: '/assets/images/ZoronITProject.jpg', // Updated image path
    link: '/projects/zoron-it'
  }
];

export default projects;



