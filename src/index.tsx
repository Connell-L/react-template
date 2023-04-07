import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from './components/HelloWorld';

const App = () => {
    return <HelloWorld />;
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
