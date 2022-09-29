import React from 'react';
import user from '../../img/Mahfuz.jpg';

const Sidebar = () => {
    return (
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
                <button className='active'>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <h3>Exercise Details</h3>
            <div className='exercise'>
                <h4>Exercise time</h4>
                <h4 className='light'><span></span> seconds</h4>
            </div>
            <div className='exercise'>
                <h4>Break time</h4>
                <h4 className='light'><span>10</span> seconds</h4>
            </div>

            <button type='button' className='btn-main'>Activity Completed</button>
        </div>
    );
};

export default Sidebar;