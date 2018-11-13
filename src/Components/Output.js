import React, {Component} from 'react';

class Output extends Component {

  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     value: props.value
  //   };
  // }

  render(){
    return(
      <div className="output well">

        {this.props.value.map((item, i) => <p key={i}>{item}</p>)}

      </div>
    );
  }
}

export default Output;
