import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import '../style/Header.css';
import ball from '../images/ball.png';
import nba from '../images/nba.png';
import { BrowserRouter } from "react-router-dom";


class Header extends Component {
 render() {
     return(
         <div className='main-head'>
            <div className='logo-div'>
                <img src={ball} className="logo" alt="logo" />
                <img src={nba}  className='img' alt='nba' />
            </div>
            <div className='header-button'>
                <Button href="/players">players</Button>
                <Button href="/games">games</Button>
                <Button href="/reports">reports</Button>
                <Button href="/teams">teams</Button>
            </div>
         </div>
     );
    }
}

export default Header;