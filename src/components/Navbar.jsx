import React, { useEffect, useState } from 'react';
import { styles } from "../styles";
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { close, logo, menu, cv } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        document.body.style.overflow = toggle ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [toggle]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setToggle(false);
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const handleViewCV = () => {
        window.open(cv, '_blank');
    };

    return (
        <nav className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 right-0 z-20 backdrop-blur-lg bg-[#070707] sm:bg-[#07070799]`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to="/"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="logo" className='w-10 h-10 object-contain' />
                    <p className='hidden sm:block text-white text-[18px] font-semibold cursor-pointer'>Ajaya Nemkul Shrestha</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((item) => (
                        <li
                            key={item.id}
                            className={`${active === item.title
                                ? "text-[#10ffcb]"  // This sets the active color to #10ffcb
                                : "text-secondary"} hover:text-white text-[15px] font-medium transition-all ease-in-out`}
                            onClick={() => setActive(item.title)}
                        >
                            <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                    {/* New "View CV" button */}
                    <li>
                        <button
                            onClick={handleViewCV}
                            className="btn-ghost text-[14px] font-medium transition-all ease-in-out px-3 py-1 rounded-lg"
                        >
                            View CV
                        </button>
                    </li>
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <button
                        type='button'
                        aria-label={toggle ? 'Close menu' : 'Open menu'}
                        className='w-[36px] h-[36px] flex items-center justify-center'
                        onClick={() => setToggle(!toggle)}
                    >
                        <img
                            src={toggle ? close : menu}
                            alt='menu'
                            className='w-[28px] h-[28px] object-contain cursor-pointer'
                        />
                    </button>

                    {toggle && (
                        <button
                            type='button'
                            aria-label='Close mobile menu backdrop'
                            className='fixed inset-0 z-30 bg-black/55'
                            onClick={() => setToggle(false)}
                        />
                    )}

                    <div className={`${!toggle ? 'hidden' : 'flex'} glass-panel p-6 fixed top-[82px] left-4 right-4 z-40 rounded-2xl`}>
                        <ul className='list-none flex w-full items-start flex-col gap-4'>
                            {navLinks.map((item) => (
                                <li
                                    key={item.id}
                                    className={`${active === item.title
                                        ? "text-[#10ffcb]"  // This sets the active color to #10ffcb for mobile menu
                                        : "text-secondary"} font-poppins font-medium transition-all ease-in-out text-[16px]`}
                                    onClick={() => {
                                        setActive(item.title);
                                        setToggle(false);
                                    }}
                                >
                                    <a href={`#${item.id}`}>{item.title}</a>
                                </li>
                            ))}
                            {/* New "View CV" button for mobile */}
                            <li>
                                <button
                                    onClick={() => {
                                        setToggle(false);
                                        handleViewCV();
                                    }}
                                    className="btn-ghost text-[14px] font-medium transition-all ease-in-out px-3 py-1 rounded-lg"
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
