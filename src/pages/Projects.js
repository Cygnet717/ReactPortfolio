// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import pandemic from './images/Pandemic.png';
import minesweeper from './images/minesweeper.png';
import unicornBooks from './images/UnicornBooksScreenshot.png';
import radicalRecepies from './images/RRRecipes.jpg';
import nonogram from './images/NonogramScreenshot.png';
import dbzquiz from './images/dbzquiz.png';

const Projects = () => {
  const projList = [
    {
      id: 1234,
      title: 'Pandemic Watch',
      text: 'This website is a way of easily keeping tabs on the progression of vaccinations among the states. I used the Victory npm to make the graphs and Covid Act Now API to gather the data.',
      repoLocation: 'https://github.com/Cygnet717/pandemicWatch',
      liveLocation: 'https://pandemic-watch.vercel.app/',
      imageLocation: pandemic
    },
    {
      id: 234,
      title: 'Minesweeper',
      text: 'Having always enjoyed Minesweeper I decided to build it to explore all the challenges it presents. One of the harder parts was to generate the clues that would appear on the gameboard.',
      repoLocation: 'https://github.com/Cygnet717/Minesweeper',
      liveLocation: 'https://cygnet717.github.io/Minesweeper/',
      imageLocation: minesweeper
    },
    {
      id: 5432,
      title: 'Unicorn Books',
      text: 'This group project uses sequelize and mysql to create a database of books and users. It allows users to checkout books, return their checked out books and update their user information.',
      repoLocation: 'https://github.com/Cygnet717/UnicornBooks',
      liveLocation: 'https://unicornbooks.herokuapp.com/',
      imageLocation: unicornBooks
    },
    {
      id: 431,
      title: 'Really Radical Recepies',
      text: 'Group built project where users can search for recipes by typing in one or multiple ingredients and a carousel populated with images and titles appears, allowing the user to select a recipe of their choosing',
      repoLocation: 'https://github.com/Preston0214/really-radical-recipes',
      liveLocation: 'https://preston0214.github.io/really-radical-recipes/index.html',
      imageLocation: radicalRecepies
    },
    {
      id: 4332,
      title: 'Nonogram',
      text: 'I enjoy playing logic games like Nonogram and I decided to make some from scratch just for the experience of building the code to make the game work. It was a fun challenge and after doing the minesweeper game it wasn\'t too hard.',
      repoLocation: 'https://github.com/Cygnet717/Nonogram',
      liveLocation: 'https://cygnet717.github.io/Nonogram/',
      imageLocation: nonogram
    },
    {
      id: 4541,
      title: 'DBZ Quiz',
      text: 'I made a quiz about the popular anime show Dragon Ball Z. This is a timed quiz that calculates your power level. You get bonus points for finishing with time left on the clock but be careful because each wrong answer removes time from the clock.',
      repoLocation: 'https://github.com/Cygnet717/Code-Quiz',
      liveLocation: 'https://cygnet717.github.io/Code-Quiz/',
      imageLocation: dbzquiz
    }
  ]

  const styles = {
    content: {
      background: '#03838cf1',
      color: '#D8A113'
    },
    card: {
      width: '80vw',
      margin: '20px auto',
      boxShadow: '5px 5px 5px #4a4538',
      border: '2px solid #03838cf1'
    },
    item: {
      width: '100%',
      margin: '0 auto'
    },
    button: {
      margin: '0 20px',
      background: '#D8A113',
      border: 'none',
      boxShadow: '5px 5px 5px black',
    }
  }

  return (
    <div>
      <h1 style={{color: 'black'}}>Projects</h1>
      {projList.map(proj =>(
        <Card style={styles.card}>
          <Card.Img variant='top' src={proj.imageLocation} alt="Card image" />
          <Card.Body style={styles.content}>
            <Card.Title>{proj.title}</Card.Title>
            <Card.Text>
              {proj.text}
            </Card.Text>
            <Button href={proj.repoLocation} variant="light" style={styles.button}>Repo</Button>
            <Button href={proj.liveLocation} variant="light"  style={styles.button}>Live Page</Button>
          </Card.Body>
        </Card> 
      ))}
    </div>
  );
};

export default Projects;