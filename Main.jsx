import React from "react";
import { ReactDOM } from "react-dom";
import './Main.css';

function destinationsimage (){
    return(
        <div className="container">
            <div className="image-holder">
            <h2><span>01</span> pick your destination</h2>
            <img src="https://space-tourism-multi-page-solution.netlify.app/images/b5a3c90e9c8eeb2cb68d.webp" className="body"/>

        </div>

        <div className="place">
        <nav className="navbar1">
            <ul>
                <li>Moon</li>
                <li>Mars</li>
                <li>Europa</li>
                <li>Technology</li>
            </ul>
        </nav>
        <h1 className="planetname"> MOON</h1>
        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

    </div>

        </div>
        
    )
}
export default destinationsimage

