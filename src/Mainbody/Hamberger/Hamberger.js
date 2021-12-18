import React from 'react';
import './Hamberger.css'

function Hamberger(props) {
    return (
        <div className = 'hamberger-container'>
            <div className = 'hamberger-bar'></div>
            <div className = 'hamberger-bar'></div>
            <div className = 'hamberger-bar'></div>
        </div>
    );
}

export default Hamberger;