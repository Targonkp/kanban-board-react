import React, {useState, useContext } from 'react'
import {Context} from "../Context";
import './footer.css'

function Footer() {
    let {theBacklog, theFinished} = useContext(Context);

    return(
        <div className='footer'>
            <div className='footer-wrap'>
                <span className='footer-text'>Active tasks: {theBacklog.length}</span>
                <span className='footer-text'>Finished tasks: {theFinished.length}</span>
                <span className='footer-text'>Kanban board by Timur, 2024</span>
            </div>
        </div>
    )
}

export default Footer;