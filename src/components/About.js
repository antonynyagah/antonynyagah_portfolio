import React from 'react';
import meThumbnail from '../thumbnails/portfolio-pic.jpg'; // Make sure the path is correct

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={meThumbnail} alt="Antony Nyagah" />
        </div>
        <div className="about-description">
          <p>
            Hi! I'm [Your Name], a passionate full stack web developer with a background in MERN stack (MongoDB, Express.js, React, Node.js) development and Python programming.
          </p>
          <p>
            I'm a proud graduate of a coding bootcamp where I honed my skills and acquired a strong foundation in web development. During my journey, I've had the privilege of working as a Lead Support Engineer, where I developed problem-solving skills and effective communication.
          </p>
          <p>
            My expertise includes building modern, responsive web applications, utilizing the latest technologies and best practices. I enjoy tackling challenges and turning them into opportunities for growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
