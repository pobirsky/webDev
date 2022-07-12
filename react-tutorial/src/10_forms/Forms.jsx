import React, {Component} from 'react';

class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
  }

  handleInputChange = ({target: {value}}) => {
    this.setState({
      inputText: value,
    })
  }

  handlTextareaChange = ({target: {value}}) => {
    this.setState({
      textareaText: value,
    })
  }

  render() {
    const {inputText, textareaText} = this.state;
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" value={inputText} onChange={this.handleInputChange}/>
        </label>
        {/*Textarea*/}<br/>
        <label htmlFor="text">Text:</label>
        <textarea id="text" value={textareaText} onChange={this.handlTextareaChange}/>
        {/*Button*/}<br/>
        <button>Show</button>
      </form>
    );
  }
};

export default Form;
