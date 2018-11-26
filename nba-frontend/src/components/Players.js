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

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
          playersData: [],
          error: false,
        };
      }
    componentDidMount() {
    return $.ajax ({
      url: ApiURL('/players'),
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: data => this.setState({ playersData: data }),
      error: error => console.log(error),
    });
  }
    render() {
        const { playersData } = this.state
        return(
            <div className='teams-container'>
                <Paper className="teams-paper">
                <Table className='teams-table'>
                <TableHead className='table-head'>
                <TableRow>
                    <TableCell width={25}><h2>PLAYER</h2></TableCell>
                    <TableCell width={25}><h2>TEAM</h2></TableCell>
                    <TableCell width={25}><h2>Position</h2></TableCell>
                    <TableCell width={25}><h2>SCHOOL</h2></TableCell>

                </TableRow>
                </TableHead>
                <TableBody  height="calc(100vh - 360px)">
                {playersData.map(player => {
                    return (
                    <TableRow key={player.playerId}>
                        <TableCell component="th" scope="row">
                        <span className='table-span' width={25}>{player.name}</span>
                        </TableCell>
                        <TableCell width={25}><span className='table-span'>{player.team}</span></TableCell>
                        <TableCell width={25}><span className='table-span'>{player.position}</span></TableCell>
                        <TableCell width={25}><span className='table-span'>{player.school}</span></TableCell>
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
export default Players; 