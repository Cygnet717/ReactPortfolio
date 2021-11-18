import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [ ,  ] = useState([]);

  useEffect(() => {
    console.log('HERE')
  }, []);

  return (
    <div className="">
      <h1>Hero</h1>
    </div>
  );
};

export default Hero;