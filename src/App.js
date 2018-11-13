import React, { Component } from 'react';
import axios from 'axios';
import Output from './Components/Output';
import Select from './Components/Controls/Select';
import Text from './Components/Controls/Text';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      paras: 4,
      html: 'json',
      text: [],
    };
    this.getSampleText = this.getSampleText.bind(this);
    this.showHTML = this.showHTML.bind(this);
    this.changeParas = this.changeParas.bind(this);
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios.get(`https://baconipsum.com/api/?type=all-filler&paras=${this.state.paras}&start-with-lorem=1&format=${this.state.html}`)
    .then((response) => {
      // console.log(response);
      var html = this.state.html;
      var text = this.state.text;
      text = [];
      if (html === 'json') {
        text = response.data.map((item) => item);
      }
      else if (html === 'html') {
        text[0] = response.data;
      }
      // console.log(text);
      this.setState({text});
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  showHTML(value) {
    this.setState({html: value}, this.getSampleText);
  }

  changeParas(value) {
    this.setState({paras: value}, this.getSampleText);
  }


  render() {
    return (
      <div className="App container">
          <h1 className="text-center">Random Text Generator</h1>
          <hr/>
          <form className="form-inline text-center">
            <div className="form-group">
              <label>Paragraphs:</label>
              <Text value={this.state.paras} onChange={this.changeParas} />
            </div>
            <div className="form-group">
              <label>Include HTML:</label>
              <Select value={this.state.html} onChange={this.showHTML} />
            </div>

          </form>
          <br/><br/>

        <Output value={this.state.text}/>

      </div>
    );
  }
}

export default App;
