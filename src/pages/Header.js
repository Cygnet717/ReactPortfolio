import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [ ,  ] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="">
      <Link to="/">
        <button className="btn btn-lg btn-danger">Home</button>
      </Link>
      <Link to="/AboutMe">
        <button className="btn btn-lg btn-danger">AboutMe</button>
      </Link>
      <Link to="/Projects">
        <button className="btn btn-lg btn-danger">Projects</button>
      </Link>
      <Link to="/Resume">
        <button className="btn btn-lg btn-danger">Resume</button>
      </Link>
      <Link to="/Contact">
        <button className="btn btn-lg btn-danger">Contact</button>
      </Link>
    </div>
  );
};

export default Header;