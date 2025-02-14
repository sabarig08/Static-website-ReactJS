import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 My Website. All rights reserved.</p>
                <ul className="social-links">
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.twitter.com">Twitter</a></li>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;