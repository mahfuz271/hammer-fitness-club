import React from 'react';
import Activity from '../Activity/Activity';

const Header = () => {
    return (
        <div>
            <h1>HAMMER FITNESS CLUB</h1>
            <h2>Select today’s exercise</h2>
            <div className='blog'>
                <Activity image='' title='Squats' second='30'></Activity>
            </div>
        </div>
    );
};

export default Header;