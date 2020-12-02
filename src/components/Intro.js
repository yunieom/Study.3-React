import { Component } from 'react';

class Intro extends Component {
    render () {
      return (
        <h2>Hello, {this.props.name} and {this.props.subname}.</h2>
      );
    }
  }

export default Intro;    