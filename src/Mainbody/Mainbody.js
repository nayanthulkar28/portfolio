import React from 'react';
import './Mainbody.css'
import Intro from './intro/intro'
// import Projects from './Projects/Projects'
// import Contact from './Contact/Contact'
import Hamberger from './Hamberger/Hamberger'

function Mainbody(props) {
    return (
        <div className = 'mainbody-container'>
            <div className = 'mainbody-container-shift'>
                <Hamberger />
                <Intro />
                {/* <Projects /> */}
                {/* <Contact /> */}
            </div>
        </div>
    );
}

export default Mainbody;