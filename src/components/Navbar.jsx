import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';
import { GrLanguage } from 'react-icons/gr';
import { FaBars, FaXmark } from 'react-icons/fa6';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: 'Overview', path: 'home' },
        { link: 'Feature', path: 'feature' },
        { link: 'About', path: 'about' },
        { link: 'Pricing', path: 'pricing' },
    ];

    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 left-0 right-0'>
                <div className='text-lg container flex items-center justify-between mx-auto font-medium'>
                    <div className='flex items-center space-x-14'>
                        <a href="" className='flex font-semibold items-center text-2xl space-x-5 text-primary'>
                            <img src={logo} alt="" className='w-10 inline-block items-center' /><span>Logo</span>
                        </a>
                        {/* <a href=""><li className='block hover:text-gray-300'>Overview</li></a>
                            <a href=""><li className='block hover:text-gray-300'>Feature</li></a>
                            <a href=""><li className='block hover:text-gray-300'>About</li></a>
                            <a href=""><li className='block hover:text-gray-300'>Pricing</li></a> */}
                            
                            {/* mapping on links  */}
                        <ul className='hidden md:flex space-x-12'>
                            
                            {
                                navItems.map(({ link, path }) => (
                                    <Link key={link} to={path}  smooth duration={500} className="block hover:text-gray-300 cursor-pointer">
                                        {link}
                                    </Link>
                                ))
                            }

                        </ul>
                    </div>

                    {/* button  */}
                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href="" className='hidden lg:flex items-center hover:text-secondary'>
                            <GrLanguage className='mr-2' /><span>Language</span></a>
                        <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded
                    hover:text-white hover:bg-indigo-600'>
                            Sign Up</button>
                    </div>

                    {/* small screen button  */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none
                          focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) :
                                    (<FaBars className='w-6 h-6 text-primary' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>
            {/* navigation links small screen  */}
            {/* Navigation links for small screens */}
            <div
                className={`px-4 pt-28 pb-5 bg-secondary text-xl ${isMenuOpen ? 'block top-0 right-0 left-0 ' : 'hidden'
                    }`}
            >
                <ul className='md:hidden font-semibold'>
                    {/* Use the Link component for smooth scrolling */}
                    {navItems.map(({ link, path }) => (
                        <li key={link} className='block hover:text-gray-300 my-4'>
                            <Link
                                to={path}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                                spy={true}
                                exact='true'
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar
