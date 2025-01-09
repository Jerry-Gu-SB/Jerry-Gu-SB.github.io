import StudentCourseApp from './images/coursereview.jpg';
import ShadowBox from './images/shadowbox.png';
import SplitBall from './images/splitball.png';
import Portfolio from './images/portolio.png';
import HTTP from './images/HTTP.jpg';
import ML4VA from './images/ML4VA.png';
import ASDE from './images/ASDE.png';
const ProjectList = [
  {
    title: 'Academic Project Tracker',
    details: ['•	Deployed a project management website as DevOps team lead overseeing a team of four developers', 
      '•	Utilized Django, Heroku, and AWS S3 to create a scalable and secure web application for tracking academic projects',
      '• Led sprint meetings in an Agile environment to ensure project completion and team cohesion',
      '• Check out the website by clicking here!'],
    image: ASDE,
    link: 'https://academic-project-tracker-ded80913e758.herokuapp.com/',
  },
    {
      title: 'ML4VA',
      details: ['•	Secured third place in UVA "ML4VA" class competitition', 
        '• Cleaned and visualized publicly available Kaggle dataset to predict SOL scores of Virginia schools',
        '• Check out the repo by clicking here!'],
      image: ML4VA,
      link: 'https://github.com/Jerry-Gu-SB/ML4VA'
    },
    {
      title: 'ShadowBox Mouse Trainer ',
      details: ['•	Conceived the original idea for a mouse coordination training game, identifying a need for such a tool', 
        '•	Self-taught Unity and C# scripting to bring the game idea to life, successfully bringing new game to public ', 
        '•	Try it out by clicking on this image!'],
      image: ShadowBox,
      link: 'https://jerrygu.itch.io/shadowbox'
    },
    {
      title: 'SplitBall',
      details: ['•	Inherited single player game as a team of two to repurpose as a multiplayer offline competitive game within the Unity Engine and C#', 
        '•	Check out the repo by clicking on this image!'],
      image: SplitBall,
      link: 'https://github.com/UVASGD/spring-2022-splitball',
    },
    {
      title: 'Student Course Review App',
      details: ['•	Designed and developed a class review application as a final project for Software Development Essentials course', 
        '•	Engineered a 3-layer architecture pattern with JavaFX as the presentation layer, Java for logic, and SQLite for the backend'],
      image: StudentCourseApp,
      link: '',
    },
    {
      title: 'Personal Portfolio Website',
      details: ['•	Constructed a personal portfolio website using React + TypeScript, and designed using Tailwind CSS', 
        '•	Incorporated an email contact form using Formspree, providing direct communication with visitors', 
        '•	Check out this website\'s source code by clicking on this image!'],
      image: Portfolio,
      link: 'https://github.com/Jerry-Gu-SB/Jerry-Gu-SB.github.io'
    },
    {
      title: 'HTTP 1.0 File Server',
      details: ['•	Utilized C programming language socket library to construct a file delivery webserver supporting subset of HTTP/1.0', 
        '• Implemented functionality to handle GET and POST requests for efficient file transfer and data submission',
        '• Check out the repo by clicking here!'],
      image: HTTP,
      link: 'https://github.com/Jerry-Gu-SB/socket-server-client'
    },
    
  ];
  
  export default ProjectList;
  