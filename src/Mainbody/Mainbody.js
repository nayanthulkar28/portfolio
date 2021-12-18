import React from 'react';
import './Mainbody.css'
import Intro from './intro/intro'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function Mainbody(props) {
    return (
        <div className = 'mainbody-container'>
            <div className = 'mainbody-container-shift'>
                <Intro />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default Mainbody;