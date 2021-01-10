import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import Intro from './components/Intro';
import Welcome from './components/Welcome'; 






class App extends Component  {
  constructor(props) {
    super(props);
    // max.contenct_id의 숫자는 contents의 마지막 id 값
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id:2,
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!'} ,  
      contents:[
        {id:1, title:'HTML', desc: 'HTMl is for information'},
        {id:2, title:'CSS', desc: 'CSS is for design'},
        {id:3, title:'JavaScript', desc: 'JavaScript is for interactive'} 
      ]
    }
  }  
  getReadContent(){
    var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
          break; 
        } 
        i = i+1;
      }
  }
  getContent(){
    var _title, _desc = null, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode ===  'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        // add content to this.state.contents
        this.max_content_id = this.max_content_id+1;
        //this.state.contents.push(
        //  {id:this.max_content_id, title:_title, desc:_desc}
        //  );
        
        //shouldComponentUpdate를 쓰기위한 방법 1 concat

        /* var _contents = this.state.contents.concat(
          //.push 대신 .concat을 쓰는 이유: 원본을 바꾸지 않고 배열을 복제하기 위한 값을 따로 변수에 저장하기 위해
          // 성능향상을 위해 render 횟수를 줄이는 shoulComponentUpdate를 쓸 때 원본이 다르면 비교가 불가능
          {id:this.max_content_id, title:_title, desc:_desc}
         ) */

        //shouldComponentUpdate를 쓰기위한 방법 2 Array.from (배열을 바꾸고 싶을 때)
        //배열의 객체를 바꾸고 싶을땐:  Object.assign
        var newContents = Array.from(this.state.contents);
        newContents.push({id:this.max_content_id, title:_title, desc: _desc});
        this.setState({
          contents:newContents
        });
      }.bind(this)}> </CreateContent>
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc) {
        
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length) {
          if(_contents[i].id === _id) {
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents:_contents
        });
      }.bind(this)}> </UpdateContent>
    }
    return _article;
  }

  render () {
    console.log('App render');
    return (
    <div className="App">
      <Subject 
        title={this.state.subject.title}  
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
      >
      </Subject> 
      <Subject title="React" sub="For UI"></Subject>
      <TOC 
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}
      ></TOC>
      <Control onChangeMode={function(_mode) {
        this.setState({
          mode:_mode
        });
      }.bind(this)}></Control>
      {this.getContent()}
      <Welcome></Welcome>
      <Intro name="yuni"></Intro>
    </div>
    );
  }    
}

export default App;
