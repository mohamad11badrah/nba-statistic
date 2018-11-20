import React, { Component } from 'react';
import { Switch, Route , Redirect } from 'react-router';
import Players from './Players'
import Games from './Games'
import Chart from './Chart'
import Teams from './Teams'
import Reports from './Reports'
import '../style/Home.css'


class Home extends Component {
    render() {
        return(
            <div className='main-home'>
                <Switch>
                    <Route exact path='/players'  component={Players} />
                    <Route exact path='/games'  component={Games} />
                    <Route exact path='/teams'  component={Teams} />
                    <Route exact path='/chart'  component={Chart} />
                    <Route exact path='/reports'  component={Reports} />
                    <Route path='/'  render={() => ( <Redirect to="/players" /> )} />
                </Switch>
            </div>
        );
    }
}
export default Home; 