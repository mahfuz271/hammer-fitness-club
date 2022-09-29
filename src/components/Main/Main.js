import React from 'react';
import Activity from '../Activity/Activity';

import squats from '../../img/back-squat.jpg';
import Deadlifts from '../../img/Deadlifts.jpg';
import Burpees from '../../img/Burpees.jpg';
import Rotations from '../../img/Rotations.jpg';
import Rolling from '../../img/Rolling.jpg';
import Adductions from '../../img/Adductions.jpg';

const Main = () => {
    return (
        <div>
            <h1>HAMMER FITNESS CLUB</h1>
            <h2>Select today’s exercise</h2>
            <div className='blog'>
                <Activity image={squats} title='Squats' second='30'></Activity>
                <Activity image={Deadlifts} title='Deadlifts' second='20'></Activity>
                <Activity image={Burpees} title='Burpees' second='40'></Activity>
                <Activity image={Rotations} title='Shoulder Rotations' second='30'></Activity>
                <Activity image={Rolling} title='Foam Rolling' second='25'></Activity>
                <Activity image={Adductions} title='Hip Adductions' second='20'></Activity>
            </div>
        </div>
    );
};

export default Main;