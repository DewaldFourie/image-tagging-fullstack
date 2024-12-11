
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './styles/navbar.css'

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsNavbarSticky(true);
            } else {
                setIsNavbarSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={`navbar ${isNavbarSticky ? 'sticky' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="container">
                <div className={`brand-name ${isNavbarSticky ? 'sticky' : ''}`}>
                    <NavLink to="/">APP</NavLink>
                </div>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile' : '' } ${isNavbarSticky ? 'sticky' : ''}`}>
                    <NavLink to="/" exact activeClassName="active" onClick={toggleMobileMenu}>
                        HOME
                    </NavLink>
                    <NavLink to="/leaderboard" activeClassName="active" onClick={toggleMobileMenu}>
                        LEADERBOARD
                    </NavLink>
                    <NavLink to="/about" activeClassName="active" onClick={toggleMobileMenu}>
                        ABOUT
                    </NavLink>
                </div>
                <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''} ${isNavbarSticky ? 'sticky' : ''}`} onClick={toggleMobileMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;