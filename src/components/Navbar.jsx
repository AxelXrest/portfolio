import React, { useEffect, useState } from 'react';
import { styles } from "../styles";
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { close, logo, menu, cv } from '../assets';

const Navbar = ({ theme, onToggleTheme }) => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const isDarkMode = theme !== 'light';
    const themeToggleHoverText = isDarkMode
        ? "Look at you, bravely choosing the blinding side."
        : "Ahem... lowering the lights for your magnificent eyeballs.";

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
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 right-0 z-20 theme-panel`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to="/"
                    className='flex items-center gap-2 leading-none whitespace-nowrap'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="logo" className='w-10 h-10 object-contain' />
                            <p className='hidden sm:block theme-text-primary text-[18px] leading-none font-semibold cursor-pointer'>Ajaya Nemkul Shrestha</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row items-center whitespace-nowrap gap-6 md:gap-8 lg:gap-10'>
                    {navLinks.map((item) => (
                        <li
                            key={item.id}
                            className={`${active === item.title
                                ? "text-[#10ffcb]"  // This sets the active color to #10ffcb
                                        : "theme-nav-link"} text-[15px] leading-none font-medium transition-all ease-in-out`}
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
                            <li>
                                <button
                                    type='button'
                                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                                    onClick={onToggleTheme}
                                    title={themeToggleHoverText}
                                    className='btn-ghost w-10 h-10 rounded-full flex items-center justify-center text-[16px]'
                                >
                                    {isDarkMode ? '☀️' : '🌙'}
                                </button>
                            </li>
                </ul>

                        <div className='sm:hidden flex flex-1 justify-end items-center gap-2'>
                            <button
                                type='button'
                                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                                onClick={onToggleTheme}
                                title={themeToggleHoverText}
                                className='btn-ghost w-10 h-10 rounded-full flex items-center justify-center text-[16px]'
                            >
                                {isDarkMode ? '☀️' : '🌙'}
                            </button>
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
                            style={!isDarkMode ? { filter: 'brightness(0) saturate(100%)' } : undefined}
                        />
                    </button>

                    {toggle && (
                        <button
                            type='button'
                            aria-label='Close mobile menu backdrop'
                            className='fixed inset-0 z-30 bg-black/40'
                            onClick={() => setToggle(false)}
                        />
                    )}

                    <div className={`${!toggle ? 'hidden' : 'flex'} theme-menu-mobile p-6 fixed top-[82px] left-4 right-4 z-40 rounded-2xl`}>
                        <ul className='list-none flex w-full items-start flex-col gap-4'>
                            {navLinks.map((item) => (
                                <li
                                    key={item.id}
                                    className={`${active === item.title
                                        ? "text-[#10ffcb]"  // This sets the active color to #10ffcb for mobile menu
                                        : "text-[color:var(--text-primary)]"} font-poppins font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] transition-all ease-in-out text-[16px]`}
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
                                    className="bg-[color:var(--bg-surface-strong)] text-[color:var(--text-primary)] border border-[color:var(--border-color)] text-[14px] font-semibold transition-all ease-in-out px-3 py-1 rounded-lg shadow-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                                >
                                    View CV
                                </button>
                            </li>
                            <li>
                                <button
                                    type='button'
                                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                                    onClick={onToggleTheme}
                                    className='bg-[color:var(--bg-surface-strong)] text-[color:var(--text-primary)] border border-[color:var(--border-color)] text-[14px] font-semibold transition-all ease-in-out px-3 py-1 rounded-lg shadow-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
                                >
                                    {isDarkMode ? 'Switch to light mode ☀️' : 'Switch to dark mode 🌙'}
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
