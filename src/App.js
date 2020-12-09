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
      mode: 'read',
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},  
      contents:[
        {id:1, title:'HTML', desc: 'HTMl is for information'},
        {id:2, title:'CSS', desc: 'CSS is for design'},
        {id:3, title:'JavaScript', desc: 'JavaScript is for interactive'} 
      ]
    }
  }  
  render () {
    console.log('App render');
    var _title, _desc = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);
    return (
    <div className="App">
      {/* <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
      </Subject> */}
      <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
          //this.state.subject.mode = 'welcome'; 
          this.setState({
            mode: 'welcome'
          });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
      </header> 
      <Subject title="React" sub="For UI"></Subject>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
      <Welcome></Welcome>
      <Intro name="yuni"></Intro>
    </div>
    );
  }    
}

export default App;
