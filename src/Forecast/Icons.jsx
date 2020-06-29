import React, { Component } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

  class Icons extends Component {
    constructor(props) {
      super(props),
      this.state = {
        defaults: {
          icon: 'CLEAR_DAY',
          color: 'goldenrod',
          size: 512,
          animate: true
        },
      }
    }

    render() {
      return(
        <ReactAnimatedWeather
          icon={this.state.defaults.icon}
          color={this.state.defaults.color}
          size={this.state.defaults.size}
          animate={this.state.defaults.animate}
        />
      );
    }
  }

export default Icons;
