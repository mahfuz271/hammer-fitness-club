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
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
        </div>
    );
};

export default Sidebar;