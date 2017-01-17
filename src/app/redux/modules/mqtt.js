const State = {};

export default function earningGraph(state = State, action) {
  console.log({action})
  switch (action.type) {
    case 'RECEIVED_MQTT_MESSAGE':
      return {
        ...state,
        msg: action.msg
      }
    default:
      return state;
  }
}