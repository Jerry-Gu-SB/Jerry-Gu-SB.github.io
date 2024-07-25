import StudentCourseApp from './images/coursereview.jpg';
import ShadowBox from './images/shadowbox.png';
import SplitBall from './images/splitball.png';
import Portfolio from './images/portolio.png';
import HTML from './images/HTML.png';
const ProjectList = [
    {
      title: 'Student Course Review App',
      details: ['•	Designed and developed a class review application as a final project for Software Development Essentials course', '•	Engineered a 3-layer architecture pattern with JavaFX as the presentation layer, Java for logic, and SQLite for the backend'],
      image: StudentCourseApp,
    },
    {
      title: 'ShadowBox Mouse Trainer ',
      details: ['•	Conceived the original idea for a mouse coordination training game, identifying a need for such a tool', '•	Self-taught Unity and C# scripting to bring the game idea to life, successfully bringing new game to public ', '•	Play my game: jerrygu.itch.io/shadowbox'],
      image: ShadowBox,
    },
    {
      title: 'SplitBall',
      details: ['•	Inherited single player game as a team of two to repurpose as a multiplayer offline competitive game within the Unity Engine and C#', '•	Check out the repo: github.com/UVASGD/spring-2022-splitball'],
      image: SplitBall,
    },
    {
      title: 'Personal Portfolio Website',
      details: ['•	Constructed a personal portfolio website using React + TypeScript, and designed using Tailwind CSS', '•	Incorporated an email contact form using Formspree, providing direct communication with visitors', '•	Check out my website: Ctrl-R or Cmd-R'],
      image: Portfolio,
    },
    {
      title: 'HTML 1.0 File Server',
      details: ['•	Utilized C programming language socket library to construct a file delivery webserver supporting subset of HTTP/1.0', '• Implemented functionality to handle GET and POST requests for efficient file transfer and data submission.'],
      image: HTML,
    }
  ];
  
  export default ProjectList;
  