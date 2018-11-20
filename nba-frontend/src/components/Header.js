import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import '../style/Header.css';
import ball from '../images/ball.png';
import nba from '../images/nba.png';
import { Link } from 'react-router-dom';


class Header extends Component {
 render() {
     return(
         <div className='main-head'>
            <div className='logo-div'>
                <img src={ball} className="logo" alt="logo" />
                <img src={nba}  className='img' alt='nba' />
            </div>
            <div className='header-button'>
                {/* <Link to='/dashboard'><Button color="inherit">players</Button></Link> */}
                <Button color="inherit">games</Button>
                <Button color="inherit">reports</Button>
                <Button color="inherit">teams</Button>
                <Button color="inherit">depth chart</Button>
            </div>
         </div>
     );
    }
}

export default Header;