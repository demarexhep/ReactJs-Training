import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  // Ky shembull i state eshte pa hooks mundson manipulimin me state vetem mbrenda class componentave.
  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>
          Clicked {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
