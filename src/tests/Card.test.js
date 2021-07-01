import React from 'react';
import ReactDOM  from 'react-dom';
import Card from '../components/Card.js';

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Card title='title' image='image' description='description' publishedAt='2021-01-01T00:00:00' originalUrl='originalUrl'></Card>,div);
})

