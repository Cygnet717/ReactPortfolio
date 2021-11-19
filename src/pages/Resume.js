import React, { useEffect } from 'react';

const Resume = () => {

  useEffect(() => {
    
  }, []);

  return (
    <div className="">
      <h3>Education</h3>
      <div>
        <h4>U of M Bootcamp</h4>
        <p>Completed December 2021</p>
        <p>Fast paced, indepth, full stack web development course</p>
      </div>
      <div>
        <h4>Thinkful</h4>
        <p>Completed February 2020</p>
        <p>Self-paced program working with a mentor to learn full stack web development</p>
        <p>Pandemic interfiered with the job hunt.</p>
      </div>
      <h3>Work History</h3>
      <div>
        <h4>Certified Veteranary Technician</h4>
      </div>
    </div>
  );
};

export default Resume;