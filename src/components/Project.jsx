import React, { useEffect, useState } from 'react'
import { textHype, greenArrowCircle, purpleCircle, lotsOfCircle } from '../assets';
import { websites } from './../constants'

const Project = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [websiteOrder, setWebsiteOrder] = useState([3, 2, 1]);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            let scrollThresholdMin;
            let scrollThresholdMax;

            if (window.innerWidth > window.innerHeight) {
                // Horizontal orientation
                scrollThresholdMin = viewportHeight * 1;
                scrollThresholdMax = viewportHeight * 1.6;
            } else {
                // Vertical orientation
                scrollThresholdMin = viewportHeight * 2.3;
                scrollThresholdMax = viewportHeight * 2.9;
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

    const handleSwapClick = () => {
        const n = websites.length;
        const newOrder = websiteOrder.map((item, index) => {
            return (item + 1) % n;
        });

        setWebsiteOrder(newOrder);
    };


    return (
        <div
            className={`h-[90vh] mt-[45vh] portrait:mt-0 pl-[12vw] relative fade-in ${isVisible ? 'visible' : ''} portrait:mt-[150vh]`}
            // className={`h-[90vh] pl-[12vw] relative`}

            id='projects'>
            <img src={textHype} alt="" className='left-[10vw] top-[-2vh] portrait:top-[-3vw] portrait:w-[5vw] portrait:left-[8vw] w-[3vw] absolute' />
            <h1 className='text-white text-[3vw] w-[18vw] portrait:w-full portrait:text-[7vw]'>
                OUR RECENT <span className='text-[#C7ACFB]'>WORK.</span>
            </h1>
            <div className="mt-[1vh] flex items-center">
                <div className='h-[1px] bg-white w-[4vw] portrait:h-[2px] portrait:w-[15vw]'></div>
                <p className='text-white ml-5 text-[0.7vw] w-[15vw] portrait:text-[2.6vw] portrait:w-[80vw]'>Few website that we make for the last years.</p>
            </div>
            <div className="flex portrait:mt-[23vh] portrait:w-[80vw] portrait:items-center portrait:justify-between">
                {/* implemented it here */}
                <div className="flex items-center flex-col mt-[10vh] mr-[1.5vw] portrait:mr-0">
                    <div className="w-[6vw] border-[0.1vw] rounded-[2vw] h-[5vh] portrait:rounded-[12vw] portrait:border-[0.3vw] flex items-center justify-center portrait:w-[20vw] ">
                        <h2 className='text-[#C7ACFB] text-[2vw] font-loomatic portrait:text-[8vw]'>4+</h2>
                    </div>
                    <p className='text-white text-[0.7vw] mt-[1vh] portrait:text-[2vw]'>Years Of Experiences</p>
                </div>
                <div className="flex items-center flex-col mt-[10vh] mr-[1.5vw] portrait:mr-0">
                    <div className="w-[6vw] border-[0.1vw] rounded-[2vw] h-[5vh] portrait:rounded-[12vw] portrait:border-[0.3vw] flex items-center justify-center portrait:w-[20vw]">
                        <h2 className='text-[#C7ACFB] text-[2vw] font-loomatic portrait:text-[8vw]'>80+</h2>
                    </div>
                    <p className='text-white text-[0.7vw] mt-[1vh] portrait:text-[2vw]'>Projects</p>
                </div>
                <div className="flex items-center flex-col mt-[10vh] mr-[1.5vw] portrait:mr-0">
                    <div className="w-[6vw] border-[0.1vw] rounded-[2vw] h-[5vh] portrait:rounded-[12vw] portrait:border-[0.3vw] flex items-center justify-center portrait:w-[20vw]">
                        <h2 className='text-[#C7ACFB] text-[2vw] font-loomatic portrait:text-[8vw]'>7</h2>
                    </div>
                    <p className='text-white text-[0.7vw] mt-[1vh] portrait:text-[2vw]'>Company Trusted Us</p>
                </div>

                {/* Custom Slideshow */}
                <div className="absolute right-[10vw] top-0 portrait:right-0 portrait:left-[10vw]">
                    <img src={lotsOfCircle} alt="" className='absolute z-[5] h-[10vh] top-[-5vh] right-[-5vw] portrait:right-[3vw] portrait:h-[10vw] portrait:top-[10vh]' />
                    <img src={purpleCircle} alt="" className='absolute z-[5] portrait:top-[30vh] portrait:w-[10vw] top-[33vh] right-[29.5vw] portrait:right-[78vw] w-[4vw]' />
                    <img
                        src={greenArrowCircle}
                        alt=""
                        className={`absolute z-[5] portrait:top-[30vh] portrait:w-[10vw] top-[33vh] portrait:right-[80vw] right-[30vw] w-[4vw] hover:right-[29.5vw] portrait:hover:right-[78vw] cursor-pointer ease-in duration-150 `}
                        onClick={handleSwapClick}
                    />
                    {websiteOrder.map((item, index) => (
                        <a href={index === 2 ? websites[item].link : null} target="_blank" key={index}>
                            <img
                                src={websites[item].img}
                                className={
                                    index === 0
                                        ? 'h-[35vh] portrait:translate-y-[13vh] portrait:h-[20vh]'
                                        : index === 1
                                            ? 'h-[36vh] translate-y-[-35.5vh] portrait:h-[20vh] portrait:translate-y-[-6.9vh] translate-x-[2vw]'
                                            : index === 2
                                                ? 'h-[38vh] translate-y-[-72vh] portrait:h-[20vh] portrait:translate-y-[-27vh]  translate-x-[4vw]'
                                                : ''
                                }
                            />
                        </a>
                    ))}

                    <a href={websites[websiteOrder[2]].link} target='_blank' className='text-white absolute text-[1.2vw] z-[3] top-[46vh] right-[-4vw] hover:text-[#C7ACFB] duration-100 ease-in-out
                        portrait:right-[8vw] portrait:top-[36vh] portrait:text-[3.5vw]
                    '>{websites[websiteOrder[2]].name}</a>
                    <div className="bg-white absolute h-[2px] w-[4vw] z-[10] top-[51vh] right-[-4vw] portrait:hidden"></div>
                </div>
            </div>
        </div >
    )
}

export default Project