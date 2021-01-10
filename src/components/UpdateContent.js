import { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: this.props.data.title,
      desc: this.props.data.desc
    }
    this.inputFromHandler = this.inputFromHandler.bind(this);
  }
    inputFromHandler(e) {
      this.setState({[e.target.name]:e.target.value});
    }
    render () {
      console.log(this.props.data);
      console.log('UpdateContent render');
      return (
        <article>
          <h2>Update</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e) {
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
              alert('submit!');
            }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="title"
                value={this.state.title}
                onChange={this.inputFromHandler}
                /*
                inputformhandler 를 통해 필요없어진 코드 
                {function(e) {
                  console.log(e.target.value);
                  this.setState({title:e.target.value});
                }.bind(this)}
                */
                /* {this.props.date.title} = read only!*/
              ></input>
            </p>
            <p>
              <textarea 
                name="desc" 
                placeholder="description" 
                value ={this.state.desc}
                onChange={this.inputFromHandler}
              ></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

export default UpdateContent;
   