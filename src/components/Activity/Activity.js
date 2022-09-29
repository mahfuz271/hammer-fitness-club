import React from 'react';

const Activity = (props) => {
    console.log(props);
    return (
        <div className='blog_loop'>
            <div className="thumb">
                <img src="{props.second}" alt="{props.title}" />
            </div>
            <div className="text-area">
                <h3>{props.title}</h3>
                <h4>Time Required: <b>{props.second}s</b></h4>
            </div>
        </div>
    );
};

export default Activity;