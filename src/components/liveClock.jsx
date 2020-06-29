import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LiveClock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
      );
  };
}

ReactDOM.render(
  <LiveClock />,
  document.getElementById('main')
);

export default LiveClock;
