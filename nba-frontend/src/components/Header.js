import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import '../style/Header.css';
import ball from '../images/ball.png';
import nba from '../images/nba.png';


class Header extends Component {

 render() {
     return(
         <div className='main-head'>
            <img src={ball} className="head-logo" alt="logo" />
            <img src={nba} className='head-logo-img' alt='nba'/>
            <div className='head-button'>
                 <Button color="inherit">Teams</Button>
                 <Button color="inherit">players</Button>
                 <Button color="inherit">games</Button>
                 <Button color="inherit">reports</Button>
                 <Button color="inherit">chart</Button>
            </div>
         </div>
     );
 }
}

export default Header;