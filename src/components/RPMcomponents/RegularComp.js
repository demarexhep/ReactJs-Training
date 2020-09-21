import React, { Component } from "react";

export class RegularComp extends Component {
  render() {
    console.log("Regular component");
    return (
      <div>
        <h1>Regular component</h1>
        {this.props.name}
      </div>
    );
  }
}

export default RegularComp;
