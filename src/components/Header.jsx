import React, { useEffect, useState } from 'react';
import { wearewaiz, smile, smileyBlack } from '../assets';

const Header = () => {
    const [activeNav, setActiveNav] = useState('home');
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [sideBar, setSideBar] = useState(false);
    const [hidenBar, setHidenBar] = useState(true);

    useEffect(() => {
        if (sideBar === false) {
            // Set hidenBar to true after 2 seconds
            const timeout = setTimeout(() => {
                setHidenBar(true);
            }, 2000);

            // Clear the timeout if the sideBar becomes true before the timeout expires
            return () => clearTimeout(timeout);
        } else {
            // Set hidenBar to false immediately
            setHidenBar(false);
        }
    }, [sideBar]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            let scrollPositions;

            if (window.innerWidth > window.innerHeight) {
                // Horizontal orientation
                scrollPositions = {
                    home: { min: 0, max: viewportHeight * 0.15 },
                    about: { min: viewportHeight * 0.2, max: viewportHeight * 1.95 },
                    projects: { min: viewportHeight * 1.1, max: viewportHeight * 1.6 },
                    contact: { min: viewportHeight * 1.6, max: Infinity }
                };
            } else {
                // Vertical orientation
                scrollPositions = {
                    home: { min: 0, max: viewportHeight * 2.26 },
                    about: { min: viewportHeight * 0.26, max: viewportHeight * 2.1 },
                    projects: { min: viewportHeight * 2.1, max: viewportHeight * 2.95 },
                    contact: { min: viewportHeight * 2.95, max: Infinity }
                };
            }

            let activeNavItem = 'home';

            Object.keys(scrollPositions).forEach((navItem) => {
                const { min, max } = scrollPositions[navItem];
                if (scrollTop >= min && scrollTop <= max) {
                    activeNavItem = navItem;
                }
            });

            setActiveNav(activeNavItem);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleSideBar = () => {
        setSideBar((prevState) => !prevState);
    };

    const handleLinkClick = (scrollValue) => {
        const handleClick = (event) => {
            event.preventDefault();
            handleSideBar(); // Call handleSideBar here
            window.scrollTo({
                top: scrollValue,
                behavior: 'smooth'
            });
        };

        return handleClick;
    };

    return (
        <header className='fixed top-0 w-full z-[10] portrait:w-full overflow-hidden
        '>
            <nav className='flex w-full portrait:w-[95vw] justify-between items-center px-[8vw] pt-[6vh] relative portrait:pt-[4vh]'>
                <img src={wearewaiz} alt='' className='w-[6vw] portrait:w-[13vw]
                ' />
                <ul className='flex items-center justify-center portrait:hidden'>
                    <li className='relative'>
                        <div
                            className={`${activeNav === 'home' ? 'animate-nav' : 'animate-nav-hover hidden'
                                } h-[1vh] absolute translate-x-7 translate-y-[1vw] z-0`}
                        ></div>
                        <a
                            href=''
                            className='mx-9 text-white text-[1.2vw] relative z-1'
                            onClick={handleLinkClick(0)}
                        >
                            HOME
                        </a>
                    </li>
                    <li className='relative'>
                        <div
                            className={`${activeNav === 'about' ? 'animate-nav' : 'animate-nav-hover hidden'
                                } h-[1vh] absolute translate-x-7 translate-y-[1vw] z-0`}
                        ></div>
                        <a
                            href=''
                            className='mx-9 text-white text-[1.2vw] relative z-1'
                            onClick={handleLinkClick(viewportHeight * 0.36)}
                        >
                            ABOUT US
                        </a>
                    </li>
                    <li className='relative'>
                        <div
                            className={`${activeNav === 'projects' ? 'animate-nav' : 'animate-nav-hover hidden'
                                } h-[1vh] absolute translate-x-7 translate-y-[1vw] z-0`}
                        ></div>
                        <a
                            href=''
                            className='mx-9 text-white text-[1.2vw] relative z-1'
                            onClick={handleLinkClick(viewportHeight * 1.2)}
                        >
                            PROJECTS
                        </a>
                    </li>
                    <li className='relative'>
                        <div
                            className={`${activeNav === 'contact' ? 'animate-nav' : 'animate-nav-hover hidden'
                                } h-[1vh] absolute translate-x-7 translate-y-[1vw] z-0`}
                        ></div>
                        <a
                            href=''
                            className='mx-9 text-white text-[1.2vw] relative z-1'
                            onClick={handleLinkClick(viewportHeight * 1.8)}
                        >
                            CONTACT US
                        </a>
                    </li>
                </ul>
                <img src={smile} alt='' className='w-[5vw] portrait:w-[10vw] smile-animate' onClick={handleSideBar} />
            </nav>


            {/* MOBILE */}
            <nav className={`${sideBar ? 'animate-sidebar' : 'animate-reverse-sidebar'} relative w-[100vw]  h-[120vh] justify-between items-start px-[8vw] pt-[6vh] mt-[-15vh]  top-0 right-0 portrait:pt-[4vh] bg-[#C7ACFB] landscape:hidden z-[5]
                            ${hidenBar ? 'hidden' : ''}
            `}>
                <img src={smileyBlack} alt='' className='h-[3vh] right-[7vw] portrait:w-[20vw] top-[9vh] absolute animate-smile-black ' onClick={handleSideBar} />
                <ul className='flex items-center justify-start mt-[30vh] flex-col h-full'>
                    <li className='relative my-[4vh]'>
                        <div
                            className={`${activeNav === 'home' ? 'animate-nav-side' : 'animate-nav-hover-side hidden'
                                } h-[1vh] absolute translate-x-7 translate-y-[4vw] z-0`}
                        ></div>
                        <a
                            href=''
                            className='mx-9 text-black text-[5vw] relative z-1'
                            onClick={handleLinkClick(0)}
                        >
                            HOME
                        </a>
                    </li>
                    <li className='relative my-[4vh]'>
                        <div
                            className={`${activeNav === 'about' ? 'animate-nav-side' : 'animate-nav-hover-side hidden'
                                } h-[1vh] absolute translate-x-7 translate-y-[4vw] z-0`}
                        ></div>
                        <a
                            href=''
                            className='mx-9 text-black text-[5vw] relative z-1'
                            onClick={handleLinkClick(viewportHeight * 0.36)}
                        >
                            ABOUT US
                        </a>
                    </li>
                    <li className='relative my-[4vh]'>
                        <div
                            className={`${activeNav === 'projects' ? 'animate-nav-side' : 'animate-nav-hover-side hidden'
                                } h-[1vh] absolute translate-x-7 translate-y-[4vw] z-0`}
                        ></div>
                        <a
                            href=''
                            className='mx-9 text-black text-[5vw] relative z-1'
                            onClick={handleLinkClick(viewportHeight * 2.9)}
                        >
                            PROJECTS
                        </a>
                    </li>
                    <li className='relative my-[4vh]'>
                        <div
                            className={`${activeNav === 'contact' ? 'animate-nav-side' : 'animate-nav-hover-side hidden'
                                } h-[1vh] absolute translate-x-7 translate-y-[4vw] z-0`}
                        ></div>
                        <a
                            href=''
                            className='mx-9 text-black text-[5vw] relative z-1'
                            onClick={handleLinkClick(viewportHeight * 4)}
                        >
                            CONTACT US
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;
