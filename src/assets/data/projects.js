import { v4 as uuidv4 } from 'uuid';
//import ProjectImg from '../images/projectImg.png';
import PMSImg from '../images/PMS.webp';
import RMSImg from '../images/RMS.jpg';
import ACGImg from '../images/ACG.jpg';
//import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Project Monitoring System',
    desc:
      'The Project Monitoring System offers real-time task tracking and progress visualization, fostering transparency and proactive decision-making. It incorporates role-based access control and notification features to enhance communication channels, keeping stakeholders informed about project updates and milestones efficiently.',
    img: PMSImg,
  },
  {
    id: uuidv4(),
    name: 'Restuarant Management System',
    desc:
      'The Restaurant Management System features a customizable menu management module for easy updates and item categorization. It also includes a reservation management system with dynamic table availability tracking and automated confirmation notifications, streamlining operations and improving customer satisfaction.',
    img: RMSImg,
  },
  {
    id: uuidv4(),
    name: 'Atomatic Generation Image Captions based on Deep Learning and Neural Network:',
    desc:
      'The Automatic Generation Image Captions system employs advanced image captioning algorithms developed in Java, utilizing Convolutional Neural Networks (CNNs) and Long Short-Term Memory (LSTM) networks via Deeplearning4j.',
    img: ACGImg,
  },
];

export default projects;
