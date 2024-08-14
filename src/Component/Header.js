import React from 'react';
import './Header.css';
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>My Website</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;