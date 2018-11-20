import React, { Component } from 'react';
import ApiURL from '../apiClient';
import $ from 'jquery';

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
          console.log(this.state);
          
        return(
            <div>
                <ul>
                    {
                    this.state.reportData.map(function(report){
                        return <li key={report.report}>{report.name} - {report.PlayerId} 
                        - {report.injury} - {report.notes} - {report.updated}</li>;
                    })
                    }
                </ul>
            </div>
        );
    }
}
export default Reports; 