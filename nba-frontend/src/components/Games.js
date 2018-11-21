import React, { Component } from 'react';
import ApiURL from '../apiClient';
import $ from 'jquery';
import Paper from '@material-ui/core/Paper';
import '../style/Teams.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
          gamesData: [],
          error: false,
        };
      }
    componentDidMount() {
    return $.ajax ({
      url: ApiURL('/games'),
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: data => this.setState({ gamesData: data }),
      error: error => console.log(error),
    });
  }
  render() {
    const { gamesData, error } = this.state;
    return(
        <div className='teams-container'>
            <Paper className="teams-paper">
            <Table className='teams-table'>
            <TableHead className='table-head'>
            <TableRow>
                <TableCell width={25}><h2>DATE</h2></TableCell>
                <TableCell width={25}><h2>AWAY</h2></TableCell>
                <TableCell width={25}><h2>HOME</h2></TableCell>
                <TableCell width={25}><h2>WEEK</h2></TableCell>
            </TableRow>
            </TableHead>
            <TableBody  height="calc(100vh - 360px)">
            {gamesData.map(game => {
                return (
                <TableRow key={game.id}>
                    <TableCell component="th" scope="row">
                    <span className='table-span' width={25}>{game.gameDate}</span>
                    </TableCell>
                    <TableCell width={25}><span className='table-span'>{game.away}</span></TableCell>
                    <TableCell width={25}><span className='table-span'>{game.home}</span></TableCell>
                    <TableCell width={25}><span className='table-span'>{game.week}</span></TableCell>

                </TableRow>
                );
            })}
            </TableBody>
        </Table>

            </Paper>
        </div>
    );
}
}
export default Games; 