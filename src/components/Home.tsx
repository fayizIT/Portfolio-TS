import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home: React.FC = () => {
  return (
    <div id="Home" className='w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center'>
      <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16'>
        <div className='flex flex-col justify-center md:w-1/2 space-y-8'>
          <h2 className='text-4xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 text-center md:text-left'>
            I'm a Full Stack Web Developer
          </h2>
          <p className='text-gray-300 text-lg max-w-2xl text-center md:text-left'>
            With 1 year of industrial experience as a self-taught MERN Full Stack developer, I specialize in REST APIs, NoSQL databases, Node.js, and React.js. My expertise extends to PostgreSQL and collaborative teamwork. I excel in frontend development with React, including advanced concepts like Hooks and Context API. Eager to expand my backend skills with Node.js, I'm committed to continuous learning and creating impactful web experiences.
          </p>
          <div className='text-center md:text-left'>
            <Link to="Skill" smooth duration={500} className='group text-white w-fit px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2'>
              <span>Explore My Skills</span>
              <MdOutlineKeyboardArrowRight size={25} className='group-hover:rotate-90 transition-transform duration-300' />
            </Link>
          </div>
        </div>
        <div className='md:w-1/2 mt-12 md:mt-0'>
          <img src={HeroImage} alt="my profile" className='w-full max-w-md mx-auto rounded-full shadow-2xl border-4 border-cyan-500 hover:scale-105 transition-transform duration-300' />
        </div>
      </div>
    </div>
  );
};

export default Home;
