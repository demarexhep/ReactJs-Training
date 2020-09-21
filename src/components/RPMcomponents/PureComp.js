import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("Pure component");
    return (
      <div>
        <h1>Pure component</h1>
        {this.props.name}
      </div>
    );
  }
}

export default PureComp;

//Ky komponent eshte lidhur me ParentComp dhe RegularComp
