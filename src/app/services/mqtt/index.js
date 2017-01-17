import React, { Component } from 'react';
import mqtt from 'mqtt';

const propsMqtt = {
  url: 'ws://42do.ru:20001',
  options: {
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    protocolId: 'MQTT',
    username:'test',
    password:'test',
  }
}

export const client = mqtt.connect(propsMqtt.url, propsMqtt.options);

class Mqtt extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { subscribe } = this.props;
    subscribe.forEach(v => client.subscribe(v));
    client.on("message", this.props.onMessage);
  }

  render() { return <div></div>; }
};

Mqtt.propTypes = {
  subscribe: React.PropTypes.array.isRequired,
  publish: React.PropTypes.object,
  onMessage: React.PropTypes.func.isRequired,
};

export default Mqtt;
