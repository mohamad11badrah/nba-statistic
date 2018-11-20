import React, { Component } from 'react';
import ApiURL from '../apiClient';
import $ from 'jquery';

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
          console.log(this.state);
          
        return(
            <div>
                <ul>
                    {
                    this.state.teamsData.map(function(team){
                        return <li key={team.code}>{team.name} - {team.code} - {team.division}</li>;
                    })
                    }
                </ul>
            </div>
        );
    }
}
export default Teams; 