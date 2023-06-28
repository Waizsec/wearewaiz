import React, { useEffect, useState } from 'react';
import { aboutUs, error } from '../assets';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollThresholdMin = viewportHeight * 0.23; // Adjust the scaling factor as needed
            const scrollThresholdMax = viewportHeight * 2.2; // Adjust the scaling factor as needed
            const isVisible = scrollTop > scrollThresholdMin && scrollTop < scrollThresholdMax;

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
        <div className={`portrait:h-auto mt-[-50vh] px-[12vw] w-full relative fade-in ${isVisible ? 'visible' : ''}`} id="about">
            <img src={error} alt="" className="absolute right-[6vw] top-[2vh] w-[10vw]
                portrait:w-[20vw] portrait:top-0
            " />
            <p className="text-white text-[1vw] portrait:text-[4vw]">aboutUs</p>
            <div className="h-[1px] w-[5vw] mt-[1vh] bg-white portrait:w-[20vw] portrait:h-[1px]"></div>
            <div className="flex
                portrait:flex-col portrait:mt-[2vh] portrait:item-center portrait:w-full
            ">
                <img src={aboutUs} alt="" className="w-[24vw] mt-[2vh]
                    portrait:w-[80vw]
                " />
                <div className="flex flex-col justify-center ml-[5vh]
                portrait:ml-0 portrait:items-center portrait:mt-[3vw]">
                    <h1 className="text-white text-[3vw]
                        portrait:text-[8vw]
                    ">
                        WHAT IS <span className="text-[#C7ACFB] text-[3.3vw] portrait:text-[8.7vw] font-loomatic">WAIZ?</span>
                    </h1>
                    <p className="text-[1vw] text-white portrait:text-[2.8vw] portrait:text-center">
                        Waiz is a professional web development company established in 2020. We specialize in creating customized and
                        innovative web solutions for businesses of all sizes. Our team of experienced web developers is dedicated to
                        delivering exceptional customer service and ensuring client satisfaction. Let Waiz take your online presence
                        to the next level.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
