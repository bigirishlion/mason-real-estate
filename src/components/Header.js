import React from 'react'

import windermere_logo from '../images/windermere-country-roads-logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo" />
        <div className="content">
            <div className="inner">
                <h1>Isaiah Mason</h1>
                <p>Licensed Real Estate Broker</p>
                <img src={windermere_logo} alt="Windermere Real Estate Country Roads" />
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

export default Header
