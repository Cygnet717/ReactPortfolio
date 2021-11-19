import ProjectCard from './components/ProjectCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const Projects = () => {
  const projList = [
    {
      title: 'Pandemic Watch',
      text: 'This website is a way of easily keeping tabs on the progression of vaccinations among the states. I used the Victory npm to make the graphs and Covid Act Now API to gather the data.',
      technologies: [ "./images/logos/React.png", "./images/logos/NodeJS.png", "./images/logos/ReactRouter.jpg"],
      repoLocation: 'https://github.com/Cygnet717/pandemicWatch',
      liveLocation: 'https://pandemic-watch.vercel.app/',
      imageLocation: `./images/PandemicWatchLandingPage.png`
    },
    {
      title: 'Minesweeper',
      text: 'Having always enjoyed Minesweeper I decided to build it to explore all the challenges it presents. One of the harder parts was to generate the clues that would appear on the gameboard.',
      technologies: ['./images/logos/HTML.png', "./images/logos/CSS.png", "./images/logos/jQuery.png"],
      repoLocation: 'https://github.com/Cygnet717/Minesweeper',
      liveLocation: 'https://cygnet717.github.io/Minesweeper/',
      imageLocation: './images/minesweeper.png'
    },
    {
      title: 'Unicorn Books',
      text: 'This group project uses sequelize and mysql to create a database of books and users. It allows users to checkout books, return their checked out books and update their user information.',
      technologies: ['./images/logos/Handlebars.png', "./images/logos/Sequelize.png", "./images/logos/Mongo.png"],
      repoLocation: 'https://github.com/Cygnet717/UnicornBooks',
      liveLocation: 'https://unicornbooks.herokuapp.com/',
      imageLocation: './images/UnicornBooksScreenshot.png'
    },
    {
      title: 'Really Radical Recepies',
      text: 'Group built project where users can search for recipes by typing in one or multiple ingredients and a carousel populated with images and titles appears, allowing the user to select a recipe of their choosing',
      technologies: ['./images/logos/HTML.png', "./images/logos/CSS.png", "./images/logos/jQuery.png"],
      repoLocation: 'https://github.com/Preston0214/really-radical-recipes',
      liveLocation: 'https://preston0214.github.io/really-radical-recipes/index.html',
      imageLocation: './images/final-screenshot.jpg'
    }
  ]

  return (
    <div className="">
      <h1>Projects</h1>
      <Container>
        <Row>
          {projList.map(proj => <ProjectCard projData = {proj}/>)}
        </Row>
      </Container>
      
    </div>
  );
};

export default Projects;