import ProjectCard from './components/ProjectCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Projects = () => {
  const projList = [
    {
      title: 'Pandemic Watch',
      text: 'This website is a way of easily keeping tabs on the progression of vaccinations among the states. I used the Victory npm to make the graphs and Covid Act Now API to gather the data.',
      technologies: [ "React", "Node", "React Router v5"],
      repoLocation: 'https://github.com/Cygnet717/pandemicWatch',
      liveLocation: '',
      imageLocation: `./images/PandemicWatchLandingPage.png`
    },
    {
      title: 'Minesweeper',
      text: 'Having always enjoyed Minesweeper I decided to build it to explore all the challenges it presents. One of the harder parts was to generate the clues that would appear on the gameboard.',
      technologies: ['HTML', "CSS", "jQuery"],
      repoLocation: '',
      liveLocation: '',
      imageLocation: './images/minesweepermobile.png'
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