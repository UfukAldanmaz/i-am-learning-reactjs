import React from 'react';

const date = new Date();
const currentHour = date.getHours
var welcome;
var style = {}
if (currentHour <= 12) {
    style = { color: "#ffff4d", }
    welcome = "Good Morning";
}
else if (date < 18) {
    style = { color: "#adff2f", }
    welcome = "Good Afternoon";
}
else {
    style = { color: "#cd00cd", }
    welcome = "Good Night";
}

function Greeting() {
    return (
        <div className='box'>
            <p className="heading" style={style}>{welcome}</p>
            <hr />
        </div>
    )
}

export default Greeting;