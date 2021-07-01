import React from 'react';
import ReactDOM  from 'react-dom';
import Cards from '../components/Cards.js';

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Cards></Cards>,div);
})

