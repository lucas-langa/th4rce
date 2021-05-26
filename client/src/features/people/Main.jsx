import React from 'react';
import { Switch, Route } from 'react-router-dom';
import People from './People';
import PeopleItem from './PeopleItem';
import Person from './Person';

const Main =() =>(
     <main>
        <Switch>
            <Route exact path='/' component={People}/>
            <Route path='/person/:name' component={Person}/>
        </Switch>
    </main>
)

export default Main;