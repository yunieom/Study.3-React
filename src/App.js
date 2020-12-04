import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import Intro from './components/Intro';
import Welcome from './components/Welcome';


class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', sub: 'World Wide Web!'}
    }
  }  
  render () {
    return (
    <div className="App">
      <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
      </Subject>
      <Subject title="React" sub="For UI"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      <Welcome></Welcome>
      <Intro name="yuni"></Intro>
    </div>
    );
  }    
}

export default App;
