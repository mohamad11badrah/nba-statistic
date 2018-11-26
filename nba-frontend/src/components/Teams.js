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


class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
          teamsData: [],
          error: false,
        };
      }
      
    componentDidMount() {
    return $.ajax ({
      url: ApiURL('/teams'),
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: data => this.setState({ teamsData: data }),
      error: error => console.log(error),
    });
  }
    render() {
        const { teamsData, error } = this.state;
        return(
            <div className='teams-container'>
                <Paper className="teams-paper" zDepth={3}>
                <Table className='teams-table'>
                <TableHead className='table-head'>
                <TableRow>
                    <TableCell width={33}><h2>ABBREVIATION</h2></TableCell>
                    <TableCell width={33}><h2>NAME</h2></TableCell>
                    <TableCell width={34}><h2>DIVISION</h2></TableCell>
                </TableRow>
                </TableHead>
                <TableBody  height="calc(100vh - 360px)">
                {teamsData.map(team => {
                    return (
                    <TableRow key={team.code}>
                        <TableCell component="th" scope="row">
                        <span className='table-span' width={33}>{team.code}</span>
                        </TableCell>
                        <TableCell width={33}><span className='table-span'>{team.name}</span></TableCell>
                        <TableCell width={34}><span className='table-span'>{team.division}</span></TableCell>
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
export default Teams; 