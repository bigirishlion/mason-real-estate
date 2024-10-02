import React from 'react'

import r_logo from '../images/nar_membershipmark_white.png';
import equal_housing from '../images/equal-housing-white.png';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="footer-icons">
            <li><img src={r_logo} /></li>
            <li><img src={equal_housing} /></li>
        </ul>
        <p className="copyright">&copy; Isaiah Mason {new Date().getFullYear()}</p>
        {/* <ul className="icons">
            <li><a href="https://www.facebook.com/isaiahmasonrealestate/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/isaiahmasonrealestate/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://www.linkedin.com/in/isaiahmasonrealestate/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
        </ul> */}
    </footer>
)

export default Footer
