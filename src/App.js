import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { HiMoon } from 'react-icons/hi';
import { CgSun } from 'react-icons/cg';
import Loading from './components/Loading';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navBackground = theme === 'light' ? 'bg-gray-200' : 'bg-gray-800';
    const navLinkColor = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <Router>
            <div className={`App ${theme}`}>
                <header>
                    <button
                        onClick={toggleNav}
                        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded transition hover:bg-gray-600 md:hidden"
                    >
                        {isNavOpen ? <IoMdClose size={24} /> : <CiMenuBurger size={24} />}
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="fixed top-4 right-4 p-2 rounded transition hover:bg-gray-600 hidden md:block"
                    >
                        {theme === 'light' ? <CgSun className="text-yellow-500" size={24} /> : <HiMoon className="text-red-400" size={24} />}
                    </button>
                </header>

                {/* Navigation Links */}
                <nav className={`w-full ${navBackground} ${isNavOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center`}>
                    <div className="flex flex-col md:flex-row items-center justify-center w-full">
                        <Link to="/home" className={`p-2 ${navLinkColor}`}>Home</Link>
                        <Link to="/education" className={`p-2 ${navLinkColor}`}>Education & Certificates</Link>
                        <Link to="/experience" className={`p-2 ${navLinkColor}`}>Experience</Link>
                        <Link to="/projects" className={`p-2 ${navLinkColor}`}>Projects</Link>
                        {/*<Link to="/contact" className={`p-2 ${navLinkColor}`}>Contact & Resume</Link>*/}
                    </div>
                </nav>


                {/* Main Content Area */}
                <div className="flex flex-col flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 60px)' }}>
                    <Routes>
                        <Route path="/" element={<Loading />} />
                        <Route path="/home" element={<About />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        {/*<Route path="/contact" element={<Contact />} />*/}
                    </Routes>
                    <Footer navBackground={navBackground} navLinkColor={navLinkColor}/> {/* Add the Footer component here */}
                </div>

                {/*<Footer /> /!* Add the Footer component here *!/*/}
            </div>
        </Router>
    );
}

export default App;
