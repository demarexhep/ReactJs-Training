import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
    };
    // this.clickHandler = this.clickHandler.bind(this); Metoda 3
  }
  //   clickHandler() { metoda3
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //   }
  // clickHandler = () => { metoda 4
  //   this.setState({
  //     message: "Goodbye",
  //   });
  // };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> Metoda e 1. */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> Metoda e 2. */}
        {/* <button onClick={this.clickHandler}>Click</button> Metoda e 3. */}
        {/* <button onClick={this.clickHandler}>Click</button> Metoda e3 dhe 4. */}
      </div>
    );
  }
}

export default EventBind;

{
  /*Event binding
    Ka menyra te ndryshme te event binding.
    Metoda 3 dhe 4 jane me te perdorura poashtu edhe me te rekomanduara nda dokumentacionet
    */
}
