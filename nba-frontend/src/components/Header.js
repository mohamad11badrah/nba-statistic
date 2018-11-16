import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import '../style/Header.css';
import ball from '../images/ball.png';


class Header extends Component {

 render() {

     return(
         <div className='main-head'>
            <AppBar position="static" >
               <Toolbar>
                   <img src={ball} className="head-logo" alt="logo" />
                 <Button color="inherit">Login</Button>
               </Toolbar>
      </AppBar>
         </div>
     );
 }
}

export default Header;