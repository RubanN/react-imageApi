import React, { Component } from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Image from '../pages/Image';
import ImgDetails from '../pages/ImgDetails';
import PageNotFound from '../pages/PageNotFound';


export default class RoutesCom extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/image" component={Image} exact/>
                    <Route path="/ImgDetails" component={ImgDetails} exact/>
                    <Route path="*" component={PageNotFound} />
                </Switch>
                
                </BrowserRouter>
                
            </div>
        )
    }
}


