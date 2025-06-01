import StudentCourseApp from './images/coursereview.jpg';
import ShadowBox from './images/shadowbox.png';
import SplitBall from './images/splitball.png';
import JackInTheBox from './images/JackInTheBox.png';
import ML4VA from './images/ML4VA.png';
import ASDE from './images/ASDE.png';

const ProjectList = [
  {
    title: 'Academic Project Tracker',
    details: ['•	Deployed a project management website as DevOps team lead overseeing a team of four developers', 
      '•	Utilized Django, Heroku, and AWS S3 to create a scalable and secure web application for tracking academic projects',
      '• Led sprint meetings in an Agile environment to ensure project completion and team cohesion',
        ],
    image: ASDE,
    link: '',
  },
  {
    title: 'Jack-in-the-Box',
    details: ['•	I made a 2D platformer frustration game for my Computer Game Design final project!',
      '• Made a game design document, a physical prototype, and playtesting throughout the semester',
      '•	Play the game by clicking on this image!'],
    image: JackInTheBox,
    link: 'https://jerrygu.itch.io/jack-in-the-box',
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
    
  ];
  
  export default ProjectList;
  