import { v4 as uuidv4 } from 'uuid';
//import ProjectImg from '../images/projectImg.png';
import PMSImg from '../images/PMS.webp';
import RMSImg from '../images/RMS.jpg';
import ACGImg from '../images/ACG.jpg';
//import CavinImg from '../images/cavinimg.jpg';

export const projects = [
  {
    id: 1,
    name: 'Automatic Generation of Image Captions Using Deep Learning',
    description: 'Developed advanced image captioning algorithms using deep learning frameworks like CNNs and LSTMs, achieving a 35% improvement in caption accuracy.',
    image: '/assets/images/ACG.jpg',
    link: '/projects/automatic-image-captioning'
  },
  {
    id: 2,
    name: 'Restaurant Management System',
    description: 'Implemented a comprehensive management solution using Java 8 and Spring Boot, including modules for menu management and order tracking.',
    image: '/assets/images/RMS.jpg',
    link: '/projects/restaurant-management'
  },
  {
    id: 3,
    name: 'Sales Data Analysis and Visualization for Sample Superstore',
    description: 'Utilized Power BI for cleaning and visualizing sales data, creating interactive dashboards to analyze product performance.',
    image: '/assets/images/SalesData.jpg',
    link: '/projects/sales-data-visualization'
  }
];


export default projects;
