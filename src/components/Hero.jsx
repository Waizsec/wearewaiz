import React, { useEffect, useState } from 'react';
import { greenCircle, purpleCircleWithArrow, waizCircle } from '../assets';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollThreshold = viewportHeight * 0.15; // Adjust the scaling factor as needed
            const isVisible = scrollTop < scrollThreshold;

            setIsVisible(isVisible);
        };

        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportHeight]);

    return (
        <div id="home">
            <div className={`w-full h-[70vh] pl-[12vw] fade-in ${isVisible ? 'visible' : ''}
            `}>
                {/* ELEMENT */}
                <div className="relative">
                    <img src={greenCircle} alt="" className="right-[12vw] absolute w-[13vw]
                        portrait:top-[70vw] portrait:w-[40vw] portrait:right-[20vw]
                    " />
                    <img src={purpleCircleWithArrow} alt="" className="right-[18vw] absolute top-[14vh] w-[13vw]
                        portrait:top-[70vw] portrait:w-[40vw] portrait:right-[38vw] portrait:rotate-[-25deg]
                    " />
                    <img src={waizCircle} alt="" className="right-[18vw] absolute top-[14vh] w-[13vw] animate-rotate
                       portrait:top-[70vw] portrait:w-[40vw] portrait:right-[38vw]
                    "
                    />
                </div>
                <h1 className="text-white text-[3vw] mt-[20vh] w-[40vw]
                    portrait:text-[7vw] portrait:w-[80vw] portrait:mt-[17vh]
                ">
                    WELCOME TO <span className="text-[#C7ACFB]">WAIZ</span> <br /> CREATE WEBSITE <br /> FOR PROFESSIONAL.
                </h1>
                <div className="mt-[3vh] flex items-center">
                    <div className="h-[1px] bg-white w-[19vw] portrait:h-[2px]"></div>
                    <p className="text-white ml-5 text-[0.7vw] portrait:text-[1.9vw]">Welcome to Waiz, your solution for professional web development</p>
                </div>
                <h1 className="mt-[5vh] text-white text-[1.6vw] portrait:text-[3vw]">
                    WEB DEVELOPMENT <span className="mx-[2vw]"></span> DESIGN <span className="mx-[2vw]"></span> DATA ANALYST
                </h1>
            </div>
        </div>
    );
};

export default Hero;
