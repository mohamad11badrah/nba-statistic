import React, { Component } from 'react';
import ApiURL from '../apiClient';
import $ from 'jquery';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          depthData: [],
          error: false,
        };
      }
    componentDidMount() {
    return $.ajax ({
      url: ApiURL('/depth'),
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: data => this.setState({ depthData: data }),
      error: error => console.log(error),
    });
  }
    render() {
          console.log(this.state);
          
        return(
            <div>
                <ul>
                    {
                    this.state.depthData.map(function(depth){
                        return <li key={depth.id}>{depth.playerId} - {depth.team} - {depth.position} - {depth.rank}</li>;
                    })
                    }
                </ul>
            </div>
        );
    }
}
export default Chart; 