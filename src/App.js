import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import MoviList from './MoviList';
import PhotoDetails from './PhotoDetails';


class App extends Component {
    render() {
        return (
            <section>
                <Switch>
                    <Route exact path="/" component={MoviList}></Route>
                    <Route exact path="/details/:photo_id" component={PhotoDetails}></Route>
                </Switch>
            </section>
        );
    }
}
export default App
