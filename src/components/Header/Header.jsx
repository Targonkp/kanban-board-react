import React from 'react';
import './header.css';
import Profile from "../Profile/Profile";

function Header(props) {
        return(
            <div className="header">
                <div className='header-wrap'>
                <span className='header-text'>{props.mainHeader}</span>
                <Profile/>
                </div>
            </div>
        )
}

export default Header;