import React, { Component } from "react";

class RefClass extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  focusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default RefClass;

//Ky komponent eshte i lidhur me RefClassParent
