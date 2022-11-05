import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';


const myText = 'my first page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App text={myText} />);
