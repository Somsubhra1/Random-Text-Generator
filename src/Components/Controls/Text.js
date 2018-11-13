import React, {Component} from 'react';

class Text extends Component {
  constructor(props){
    super(props);

    this.state = {value: props.value};
    this.change = this.change.bind(this);
  }

  change(event) {
    event.preventDefault();
    var value = event.target.value;
    this.setState({value}, () => this.props.onChange(this.state.value));
  }

  render(){
    return(
      <div>
        <input type="number" min="1" max="1000" className="form-control" value={this.state.value} onChange={this.change}/>
      </div>
    );
  }
}

export default Text;
