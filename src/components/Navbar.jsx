import React, { useEffect, useState } from 'react';
import { styles } from "../styles";
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { close, logo, menu, cv } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    const handleViewCV = () => {
        window.open(cv, '_blank');
    };

    return (
        <nav className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-lg bg-[#07070799]`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to="/"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="logo" className='w-10 h-10 object-contain' />
                    <p className='text-white text-[18px] font-semibold flex cursor-pointer]'>Ajay Nemkul Shrestha</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((Link) => (
                        <li
                            key={Link.id}
                            className={`${active === Link.title
                                ? "text-[#10ffcb]"  // This sets the active color to #10ffcb
                                : "text-secondary"} hover:text-white text-[15px] font-medium transition-all ease-in-out`}
                            onClick={() => setActive(Link.title)}
                        >
                            <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                    {/* New "View CV" button */}
                    <li>
                        <button
                            onClick={handleViewCV}
                            className="text-secondary hover:text-white text-[15px] font-medium transition-all ease-in-out"
                        >
                            View CV
                        </button>
                    </li>
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt="menu"
                         className='w-[28px] h-[28px] object-contain cursor-pointer'
                         onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} backdrop-blur-[12px] p-6 bg-gradient-to-b from-[#000000d0] shadow-card to-[#00000051] border-[1px] border-gray-500 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((Link) => (
                                <li
                                    key={Link.id}
                                    className={`${active === Link.title
                                        ? "text-[#10ffcb]"  // This sets the active color to #10ffcb for mobile menu
                                        : "text-secondary"} font-poppins font-medium transition-all ease-in-out`}
                                    onClick={() => {
                                        setActive(Link.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a href={`#${Link.id}`}>{Link.title}</a>
                                </li>
                            ))}
                            {/* New "View CV" button for mobile */}
                            <li>
                                <button
                                    onClick={handleViewCV}
                                    className="text-secondary hover:text-white text-[15px] font-medium transition-all ease-in-out"
                                >
                                    View CV
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
