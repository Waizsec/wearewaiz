import React, { useState, useEffect } from 'react';
import { Header, Hero, About, Specialist, Project, Contact } from './components';
import { scrollFlower } from './assets'

const App = () => {
  const [position, setPosition] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop / 8;
      setPosition(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <Header />
      <div className="h-[15vh] portrait:h-[10vh] w-full"></div>
      <div className="h-[35vh] fixed portrait:w-full portrait:h-[30vh] w-full bg-gradient-to-b from-opacity-100 to-opacity-0 z-[8] top-0"></div>
      <div className="fixed h-[30vh] w-[2vw] left-[7vw] top-[38vh] portrait:hidden">
        <div className="relative h-full w-[1.3px] rounded-xl bg-white">
          <img src={scrollFlower} alt="" className="w-[1.2vw] fixed left-[6.45vw]" style={{ transform: `translateY(${position}px)` }} />
        </div>
      </div>
      <Hero />
      <About />
      <Specialist />
      <Project />
      <Contact />
      {/* <div className="landscape:hidden w-full h-[80vh] flex flex-col items-center justify-center">
        <h1 className='text-white text-[6vw] mt-[20vh] w-[90vw] landscape:hidden'>WEBSITE  <span className='text-[#C7ACFB]'>UNDER</span> <br />  CONSTRUCTION FOR<br />MOBILE, USE DEKSTOP.</h1>
        <div className="mt-[1vh] flex">
          <div className='h-[2px] bg-white w-[19vw]'></div>
          <p className='text-white ml-5 text-[1.6vw]'>Welcome to Waiz, your solution for professional web development</p>
        </div>
      </div> */}
    </>
  );
};

export default App;
