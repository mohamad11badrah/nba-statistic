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

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
          reportData: [],
          error: false,
        };
      }
    componentDidMount() {
    return $.ajax ({
      url: ApiURL('/reports'),
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: data => this.setState({ reportData: data }),
      error: error => console.log(error),
    });
  }
    render() {
        const { reportData } = this.state
        return(
            <div className='teams-container'>
                <Paper className="teams-paper">
                <Table className='teams-table'>
                <TableHead className='table-head'>
                <TableRow>
                    <TableCell width={33}><h2>PLAYER</h2></TableCell>
                    <TableCell width={33}><h2>INJURY</h2></TableCell>
                    <TableCell width={34}><h2>NOTES</h2></TableCell>
                </TableRow>
                </TableHead>
                <TableBody  height="calc(100vh - 360px)">
                {reportData.map(report => {
                    return (
                    <TableRow key={report.report}>
                        <TableCell component="th" scope="row">
                        <span className='table-span' width={33}>{report.name}</span>
                        </TableCell>
                        <TableCell width={33}><span className='table-span'>{report.injury}</span></TableCell>
                        <TableCell width={34}><span className='table-span'>{report.notes}</span></TableCell>
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
export default Reports; 