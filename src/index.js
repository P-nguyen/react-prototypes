import React from 'react';
import ReactDOM from 'react-dom';

//this does not hoist......
var luckyNumber = () => Math.floor(Math.random()*1000);

var greeting = (userObject) => {
    const element = (
        <div className="container">
            <h1>Welcome {userObject.name}</h1>
            <h2 className="text-muted">Your lucky number is: {userObject.luckyNum}</h2>
        </div>
    );
    return element;
}

let name = "Peter";
let luckyNum = luckyNumber();
const user = {name, luckyNum};

ReactDOM.render(
    greeting( user ),
    document.getElementById('root')
);