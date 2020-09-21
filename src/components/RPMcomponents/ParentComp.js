import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComponent from "./MemoComponent";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rexhep",
    };
  }
  componentDidMount() {
    setInterval(() => {}, 2000);
    this.setState({
      name: "Rexhep",
    });
  }
  render() {
    console.log("Parent component");
    return (
      <div>
        <h1>Parent Component</h1>
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComponent name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
