import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CatList from './components/CatList';

const FirstCat = <CatList width="200px" height="200px"/>;

ReactDOM.render(FirstCat, document.getElementById('root'));