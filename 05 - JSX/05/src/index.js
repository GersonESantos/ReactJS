import React from 'react';
import ReactDOM from 'react-dom';

const elemento = React.createElement('h1',{},'Sem JSX');
ReactDOM.render(
    elemento,
    document.getElementById('root')
);

