import React, { Component } from 'react';
import ApiURL from '../apiClient';
import $ from 'jquery';

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
          console.log(this.state);
          
        return(
            <div>
                <ul>
                    {
                    this.state.gamesData.map(function(game){
                        return <li key={game.gameId}>{game.week} - {game.gameData} - {game.away} - {game.home}</li>;
                    })
                    }
                </ul>
            </div>
        );
    }
}
export default Games; 