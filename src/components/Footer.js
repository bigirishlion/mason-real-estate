import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Isaiah Mason {new Date().getFullYear()}</p>
    </footer>
)

export default Footer
