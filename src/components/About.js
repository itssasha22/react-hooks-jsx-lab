import React from 'react';
import { image } from './../data/data.js';

function About() {
  return (
    <div id="about" data-testid="about">
      <h2>About Me</h2>
      <p>I love building things with React and creating awesome user experiences!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;