import React, { Component } from 'react';
import ApiURL from '../apiClient';
import $ from 'jquery';

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
          console.log(this.state);
          
        return(
            <div>
                <ul>
                    {
                    this.state.playersData.map(function(player){
                        return <li key={player.playerId}>{player.team} - {player.position} 
                        - {player.height} - {player.weight} - {player.dob} - {player.school}</li>;
                    })
                    }
                </ul>
            </div>
        );
    }
}
export default Players; 