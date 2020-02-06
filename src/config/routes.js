import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import MarvelHeroes from '../Components/MarvelHeroes/MarvelHeroes';
import ImgSlide from '../Components/ImgSlide';


const Routes = ({ supes }) => {


    return (
        <Switch>
            <Route exact path='/' component= { ImgSlide } />
            <Route path='/marvelheroes' supes={supes} component={ MarvelHeroes } />
            {/* <Route path='/dcheroes' component={ DcHeroes } /> */}
            {/* <Route path='*' component={ NotFound } /> */}
        </Switch>
    );
};

export default withRouter(Routes);