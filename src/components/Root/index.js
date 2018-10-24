import React, {Component} from 'react';
import {Router} from 'react-static';
import {hot} from 'react-hot-loader';
import Routes from 'react-static-routes';
import ReactGA from 'react-ga';
import './index.scss';

class App extends Component {
    componentWillMount() {
        if (typeof window !== 'undefined') {
            ReactGA.initialize('UA-128053424-1');
        }
    }

    render() {
        return (
            <Router>
                <Routes />
            </Router>
        );
    }
}

export default hot(module)(App);
