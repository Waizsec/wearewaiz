import React, { useState, useEffect } from 'react';
import {
    purpleStar,
    arrowAbout,
    adobeIlustrator,
    affinity,
    figma,
    flask,
    procreate,
    python,
    r,
    reactImg,
    tableau,
    tailwind,
    laravel,
    next,
} from '../assets';

const Specialist = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollThresholdMin = viewportHeight * 0.25; // Adjust the scaling factor as needed
            let scrollThresholdMax;

            if (window.innerWidth > window.innerHeight) {
                // Horizontal orientation
                scrollThresholdMax = viewportHeight * 1;
            } else {
                // Vertical orientation
                scrollThresholdMax = viewportHeight * 2.25;
            }

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
        <div
            className={`w-full portrait:mt-0 relative  px-[12vw] fade-in ${isVisible ? 'visible' : ''} pb-[40v]`}
        >
            <img src={purpleStar} className="w-[10vw] absolute portrait:w-[15vw] portrait:top-[18vw]" alt="" />
            <img src={arrowAbout} alt="" className="absolute w-[6vw] portrait:w-[16vw] right-[32vw] top-[4vh]
                portrait:right-[50vw] portrait:top-[20vw] portrait:rotate-[-10deg]
            " />
            <div className="absolute right-[14vw] top-[10vw]">
                <h2 className="text-[2.4vw] text-white portrait:text-[5vw] portrait:mt-[5vw]">
                    Our <span className="text-[#C7ACFB]">Specialty? </span>
                </h2>
                <p className="text-white text-right text-[0.7vw] portrait:text-[1.8vw]">what are we good at?? good question!</p>
            </div>
            <div className="absolute top-[26vh] flex w-[80vw] justify-between portrait:flex-col 
                portrait:w-[80vw] portrait:items-center portrait:top-[50vw]
                ">
                <div className="">
                    <h2 className="text-white font-bold text-[1.8vw] font-loomatic
                        portrait:text-[6vw]
                    ">01</h2>
                    <div className="h-[2px] w-[5vw] my-[1vh] bg-white
                        portrait:w-[80vw]
                    "></div>
                    <h2 className="text-white mt-[2vh] text-[1.8vw]
                        portrait:text-[7vw]
                    ">WEB DEVELOPMENT</h2>
                    <p className="text-white text-[0.9vw] w-[19vw] mb-[1vh]
                        portrait:text-[3vw] portrait:w-[100%] portrait:my-[2vh]
                    ">
                        In the realm of web development, Wearewaiz stands out by delivering cutting-edge solutions that elevate
                        online presence, streamline workflows, and drive business growth with unmatched expertise and innovation.
                    </p>
                    {/* Icon */}
                    <div className="flex items-center">
                        <img src={flask} alt="Flask" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw]" />
                        <img src={reactImg} alt="React" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw] rounded-full" />
                        <img src={next} alt="Flask" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw]" />
                        <img src={laravel} alt="React" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw]" />
                        <img src={tailwind} alt="React" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw] rounded-full" />
                    </div>
                </div>

                <div className="portrait:mt-[9vh]">
                    <h2 className="text-white font-bold text-[1.8vw] font-loomatic
                        portrait:text-[6vw]
                    ">02</h2>
                    <div className="h-[2px] w-[5vw] my-[1vh] bg-white
                        portrait:w-[80vw]
                    "></div>
                    <h2 className="text-white mt-[2vh] text-[1.8vw]
                        portrait:text-[7vw] 
                    ">DESIGN</h2>
                    <p className="text-white text-[0.9vw] w-[19vw] mb-[1vh]
                        portrait:text-[3vw] portrait:w-[100%] portrait:my-[2vh]">
                        Wearewaiz takes design to new heights, crafting visually captivating and immersive experiences that leave a
                        lasting impression, seamlessly blending aesthetics and functionality for remarkable digital journeys.
                    </p>
                    {/* Icon */}
                    <div className="flex items-center">
                        <img src={affinity} alt="Affinity" className="h-[3.7vh] mt-[2vh] mr-[1vw] rounded-full" />
                        <img src={adobeIlustrator} alt="Adobe Illustrator" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw] rounded-full" />
                        <img src={figma} alt="Figma" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw] rounded-full" />
                        <img src={procreate} alt="Procreate" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw] rounded-full" />
                    </div>
                </div>

                <div className="portrait:mt-[9vh]">
                    <h2 className="text-white font-bold text-[1.8vw] font-loomatic
                        portrait:text-[6vw]
                    ">03</h2>
                    <div className="h-[2px] w-[5vw] my-[1vh] bg-white
                        portrait:w-[80vw]
                    "></div>
                    <h2 className="text-white mt-[2vh] text-[1.8vw]
                        portrait:text-[7vw] 
                    ">DATA ANALYST</h2>
                    <p className="text-white text-[0.9vw] w-[19vw] mb-[1vh]
                        portrait:text-[3vw] portrait:w-[100%] portrait:my-[2vh]">
                        With Wearewaiz's data analytics prowess, businesses unlock the power of data, gaining valuable insights,
                        uncovering hidden patterns, and making informed decisions that fuel success and competitive advantage in
                        today's data-driven world.
                    </p>
                    {/* Icon */}
                    <div className="flex items-center">
                        <img src={python} alt="Python" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw] rounded-full" />
                        <img src={r} alt="R" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw] rounded-full" />
                        <img src={tableau} alt="Tableau" className="h-[4vh] portrait:h-[7vw] mt-[2vh] mr-[1vw] rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialist;
