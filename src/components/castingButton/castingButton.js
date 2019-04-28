import React, { Component } from "react"
import './castingButton.css';

class castingButton extends Component {

  

  render() {
    return (
      <div 
        className="b-castingButton"
        onClick={this.props.onCasting}>
        {this.props.text}
      </div>
    );
  }
};

export default castingButton;
