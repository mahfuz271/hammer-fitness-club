import React, { useState } from 'react';
import Activity from '../Activity/Activity';

import squats from '../../img/back-squat.jpg';
import Deadlifts from '../../img/Deadlifts.jpg';
import Burpees from '../../img/Burpees.jpg';
import Rotations from '../../img/Rotations.jpg';
import Rolling from '../../img/Rolling.jpg';
import Adductions from '../../img/Adductions.jpg';
import user from '../../img/Mahfuz.jpg';

const Main = () => {

    const [seconds, setSeconds] = useState(0);

    const handleClick = (second) => {
        setSeconds(seconds + parseInt(second));
    }

    const [breaks, setBreaks] = useState(10);

    const handleBreakClick = (second, that) => {
        setBreaks(second);
        const btns = document.querySelectorAll(".addbreak button");
        for(let i=0;i<btns.length;i++){
            btns[i].classList.remove("active");
        }
        const j = (parseInt(second) / 10) - 1;
        btns[j].classList.add("active");
    }

    return (
        <div className='main_block'>
            <div>
                <h1>HAMMER FITNESS CLUB</h1>
                <h2>Select today’s exercise</h2>
                <div className='blog'>
                    <Activity handleClick={handleClick} image={squats} title='Squats' second='30'></Activity>
                    <Activity handleClick={handleClick} image={Deadlifts} title='Deadlifts' second='20'></Activity>
                    <Activity handleClick={handleClick} image={Burpees} title='Burpees' second='40'></Activity>
                    <Activity handleClick={handleClick} image={Rotations} title='Shoulder Rotations' second='30'></Activity>
                    <Activity handleClick={handleClick} image={Rolling} title='Foam Rolling' second='25'></Activity>
                    <Activity handleClick={handleClick} image={Adductions} title='Hip Adductions' second='20'></Activity>
                </div>
            </div>
            <div className='sidebar'>
                <div className='usercard'>
                    <img src={user} />
                    <p><b>Mahfuzar Rahman</b> <br /> Dhaka, Bangladesh</p>
                </div>
                <div className="userinfo">
                    <div><span>65</span> Kg<span>Weight</span></div>
                    <div><span>5.5</span><span>Height</span></div>
                    <div><span>23</span> Yrs<span>Age</span></div>
                </div>
                <h3>Add a break</h3>
                <div className="addbreak">
                    <button className='active' onClick={() => handleBreakClick(10, this)}>10s</button>
                    <button onClick={() => handleBreakClick(20, this)}>20s</button>
                    <button onClick={() => handleBreakClick(30, this)}>30s</button>
                    <button onClick={() => handleBreakClick(40, this)}>40s</button>
                    <button onClick={() => handleBreakClick(50, this)}>50s</button>
                </div>
                <h3>Exercise Details</h3>
                <div className='exercise'>
                    <h4>Exercise time</h4>
                    <h4 className='light'><span>{seconds}</span> seconds</h4>
                </div>
                <div className='exercise'>
                    <h4>Break time</h4>
                    <h4 className='light'><span>{breaks}</span> seconds</h4>
                </div>

                <button type='button' className='btn-main'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Main;