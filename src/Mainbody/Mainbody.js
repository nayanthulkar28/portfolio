import React from 'react';
import './Mainbody.css'
import Intro from './intro/intro'

function Mainbody(props) {
    return (
        <div className = 'mainbody-container'>
            <div className = 'mainbody-container-shift'>
                <Intro />
            </div>
        </div>
    );
}

export default Mainbody;