import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import Intro from './components/Intro';
import Welcome from './components/Welcome';

class App extends Component  {
  render () {
    return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject>
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
