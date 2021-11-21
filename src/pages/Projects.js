import ProjectCard from './components/ProjectCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import pandemic from './images/PandemicWatchLandingPage.png';
import reactLogo from './images/logos/React.png';
import nodeLogo from "./images/logos/NodeJs.png";
import reacrRouterLogo from "./images/logos/ReactRouter.jpg";
import htmlLogo from './images/logos/HTML.png';
import cssLogo from "./images/logos/CSS.png";
import jqueryLogo from "./images/logos/jQuery.png";
import handlebarsLogo from './images/logos/Handlebars.png';
import sequelizeLogo from "./images/logos/Sequelize.png";
import mongoLogo from "./images/logos/Mongo.png";
import minesweeper from './images/minesweeper.png';
import unicornBooks from './images/UnicornBooksScreenshot.png';
import radicalRecepies from '/images/final-screenshot.JPG';
import nonogram from '/images/NonogramScreenshot.png';
import dbzquiz from '/images/screenshot.png'

const Projects = () => {
  const projList = [
    {
      id: 1234,
      title: 'Pandemic Watch',
      text: 'This website is a way of easily keeping tabs on the progression of vaccinations among the states. I used the Victory npm to make the graphs and Covid Act Now API to gather the data.',
      technologies: [ reactLogo, nodeLogo, reacrRouterLogo],
      repoLocation: 'https://github.com/Cygnet717/pandemicWatch',
      liveLocation: 'https://pandemic-watch.vercel.app/',
      imageLocation: pandemic
    },
    {
      id: 234,
      title: 'Minesweeper',
      text: 'Having always enjoyed Minesweeper I decided to build it to explore all the challenges it presents. One of the harder parts was to generate the clues that would appear on the gameboard.',
      technologies: [ htmlLogo, cssLogo, jqueryLogo],
      repoLocation: 'https://github.com/Cygnet717/Minesweeper',
      liveLocation: 'https://cygnet717.github.io/Minesweeper/',
      imageLocation: minesweeper
    },
    {
      id: 5432,
      title: 'Unicorn Books',
      text: 'This group project uses sequelize and mysql to create a database of books and users. It allows users to checkout books, return their checked out books and update their user information.',
      technologies: [handlebarsLogo, sequelizeLogo, mongoLogo],
      repoLocation: 'https://github.com/Cygnet717/UnicornBooks',
      liveLocation: 'https://unicornbooks.herokuapp.com/',
      imageLocation: unicornBooks
    },
    {
      id: 431,
      title: 'Really Radical Recepies',
      text: 'Group built project where users can search for recipes by typing in one or multiple ingredients and a carousel populated with images and titles appears, allowing the user to select a recipe of their choosing',
      technologies: [htmlLogo, cssLogo, jqueryLogo],
      repoLocation: 'https://github.com/Preston0214/really-radical-recipes',
      liveLocation: 'https://preston0214.github.io/really-radical-recipes/index.html',
      imageLocation: radicalRecepies
    },
    {
      id: 4332,
      title: 'Nonogram',
      text: 'I enjoy playing logic games like Nonogram and I decided to make some from scratch just for the experience of building the code to make the game work. It was a fun challenge and after doing the minesweeper game it wasn\'t too hard.',
      technologies: [htmlLogo, cssLogo, jqueryLogo],
      repoLocation: 'https://github.com/Cygnet717/Nonogram',
      liveLocation: 'https://cygnet717.github.io/Nonogram/',
      imageLocation: nonogram
    },
    {
      id: 4541,
      title: 'DBZ Quiz',
      text: 'I made a quiz about the popular anime show Dragon Ball Z. This is a timed quiz that calculates your power level. You get bonus points for finishing with time left on the clock but be careful because each wrong answer removes time from the clock.',
      technologies: [htmlLogo, cssLogo, jqueryLogo],
      repoLocation: 'https://github.com/Cygnet717/Code-Quiz',
      liveLocation: 'https://cygnet717.github.io/Code-Quiz/',
      imageLocation: dbzquiz
    }
  ]

  return (
    <div className="outerDiv">
      <h1>Projects</h1>
      <Container>
        <Row>
          {projList.map(proj => <ProjectCard key={proj.id} projData = {proj}/>)}
        </Row>
      </Container>
      
    </div>
  );
};

export default Projects;