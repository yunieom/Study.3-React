import { Component } from 'react';


  render () {
    return (
      <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>
    );
  }
}

export default Subject;  