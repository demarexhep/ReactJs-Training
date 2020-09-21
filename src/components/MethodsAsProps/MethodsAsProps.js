import React, { Component } from "react";
import MethodsAsProps1 from "./MethodsAsProps1";

export class MethodsAsProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <MethodsAsProps1 greetParent={this.greetParent} />
      </div>
    );
  }
}

export default MethodsAsProps;
