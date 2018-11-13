import React, {Component} from 'react';

class Select extends Component {

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
        <select className="form-control" onChange={this.change}>
          <option value="json">No</option>
          <option value="html">Yes</option>
        </select>

      </div>
    );
  }
}

export default Select;
