import React, { Component } from "react";

export default class ClassEvent extends Component {
  handleClick() {
    console.log("button clicked..!");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
