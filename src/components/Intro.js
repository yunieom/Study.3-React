import { Component } from 'react';

class Intro extends Component {
    render () {
      console.log('Intro render');
      return (
        <h2>Hello, {this.props.name} and {this.props.subname}.</h2>
      );
    }
  }

export default Intro;    