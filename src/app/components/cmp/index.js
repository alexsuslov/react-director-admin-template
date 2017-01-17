import React, { Component } from 'react';
import { connect } from 'react-redux';
import { client } from '../../services/mqtt/';

export class Cmp extends Component {
  handleClick(e) {
    console.log(e)
    client.publish('/test', 'Hello mqtt1111');
  }
  render() {
    console.log({cmp:this.props});
    return (
      <div>
      <button onClick={this.handleClick}>publish</button>
      </div>
    );
  }
}

export default connect ( s => s.mqtt )(Cmp);
