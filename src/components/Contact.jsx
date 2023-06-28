import React, { useState, useEffect } from 'react'
import { instagram, wa, linkedin, greenEmail, purpleEmailArrow, contactCircle, contactUs } from '../assets';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [viewStatus, setViewStatus] = useState("vertical")

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            let scrollThresholdMin;
            let scrollThresholdMax;

            if (window.innerWidth > window.innerHeight) {
                // Horizontal orientation
                scrollThresholdMin = viewportHeight * 1.65;
                scrollThresholdMax = viewportHeight * 3;
                setViewStatus("horizontal")
            } else {
                // Vertical orientation
                setViewStatus("vertical")
                scrollThresholdMin = viewportHeight * 2.95;
                scrollThresholdMax = viewportHeight * 5;
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
        <div className={`pl-[12vw] mb-[30vw] w-[88vw] mt-[-30vh] portrait:mt-[-30vw] relative fade-in ${isVisible ? 'visible' : ''}
        `} id='contact'>
            <img src={contactUs} alt="" className='absolute right-[2vw] portrait:right-[0] portrait:w-[80vw] portrait:rotate-0 top-[2vh] w-[25vw] portrait:top-[-76vw]' />
            <h1 className='text-white text-[3vw] portrait:text-[6vw] portrait:mt-[30vw]'>
                WELL NOW, CONTACT <span className='text-[#C7ACFB]'>US?</span>
            </h1>
            <form action="" className='flex flex-col'>
                <div className="form mt-[2vw] w-[40vw] portrait:w-full">
                    <input type="text" name="text" autoComplete="off" className='text-white w-[30vw] text-[1.3vw] h-[5vw]
                        portrait:w-[80vw] portrait:text-[4vw] portrait:h-[15vw]
                    ' required />
                    <label htmlFor="text" className={`${viewStatus == "vertical" ? "label-name2" : "label-name"} potrait:label-name-portrait border-b-[0.15vw] border-[#C7ACFB] w-[30vw] portrait:w-[90vw]
                        potrait:border-b-[2vh] portrait:text-[2vw]
                    `}>
                        <span className="content-name text-[#C7ACFB] text-[1.1vw] portrait:text-[4vw]">
                            Name
                        </span>
                    </label>
                </div>
                <div className="form mt-[2vw] w-[40vw] portrait:w-full">
                    <input type="text" name="text" autoComplete="off" className='text-white w-[30vw] text-[1.3vw] h-[5vw]
                        portrait:w-[80vw] portrait:text-[4vw] portrait:h-[15vw]
                    ' required />
                    <label htmlFor="text" className={`${viewStatus == "vertical" ? "label-name2" : "label-name"} potrait:label-name-portrait border-b-[0.15vw] border-[#23A67A] w-[30vw] portrait:w-[90vw]
                        potrait:border-b-[2vh] portrait:text-[2vw]
                    `}>
                        <span className="content-name text-[#23A67A] text-[1.1vw] portrait:text-[4vw]">
                            E-Mail
                        </span>
                    </label>
                </div>
                <div className="form mt-[2vw] w-[40vw] portrait:w-full">
                    <input type="text" name="text" autoComplete="off" className='text-white w-[30vw] text-[1.3vw] h-[5vw]
                        portrait:w-[80vw] portrait:text-[4vw] portrait:h-[15vw]
                    ' required />
                    <label htmlFor="text" className={`${viewStatus == "vertical" ? "label-name2" : "label-name"} potrait:label-name-portrait border-b-[0.15vw] border-pink-300 w-[30vw] portrait:w-[90vw]
                        potrait:border-b-[2vh] portrait:text-[2vw]
                    `}>
                        <span className="content-name text-pink-300 text-[1.1vw] portrait:text-[4vw]">
                            Messages
                        </span>
                    </label>
                </div>

                <div className="flex mt-[4vh] relative items-center">
                    <div className="flex h-[5vh] items-center">
                        <a href="https://wa.me/+6287860910232">
                            <img src={wa} alt="" className='h-[3vh] mr-[2vh]' />
                        </a>
                        <a href="https://instagram.com/wearewaiz">
                            <img src={instagram} alt="" className='h-[3vh] mr-[2vh]' />
                        </a>
                        <a href="">
                            <img src={linkedin} alt="" className='h-[3vh] mr-[2vh]' />
                        </a>
                    </div>
                    <img src={greenEmail} alt="" className='absolute left-[29vw] portrait:left-[62vw] h-[3vw] portrait:h-[10vw]' />
                    <img src={purpleEmailArrow} alt=""
                        className='absolute left-[28.2vw] h-[3vw] hover:left-[29vw] portrait:hover:left-[62vw] portrait:left-[60vw] ease-in-out duration-[0.5s] portrait:h-[10vw] cursor-pointer' />

                </div>
            </form>

        </div>
    )
}

export default Contact