import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {

  killSmurf = (smurfToDie) => {
    // e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${smurfToDie}`, this.state)
      .then(response =>{
        this.setState({smurfs: response.data});
        console.log(response.data);
      })
      .catch(error =>{
        console.error('Smurf escaped', error);
      })
      this.forceUpdate();
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                killSmurf={this.killSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
