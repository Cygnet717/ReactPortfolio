import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className="">
      <Link to="/">
        Home
      </Link>
      <Link to="/AboutMe">
        AboutMe
      </Link>
      <Link to="/Projects">
        Projects
      </Link>
      <Link to="/Resume">
        Resume
      </Link>
      <Link to="/Contact">
        Contact
      </Link>
    </div>
  );
};

export default Header;