'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less'
import logo from './images/logo.jpeg';

class Search extends React.Component {
    render(){
        return <div className="search-text">
           Search Text is watched.热更新<img src={ logo } />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);