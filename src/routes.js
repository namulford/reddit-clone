import React from 'react';
import { Router, Route } from 'react-router';
import Posts from './containers/Posts'
import App from './containers/App';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={ App }>
            <Route path="/posts" component={ Posts }/>
        </Route>
    </Router>
);

export default Routes;