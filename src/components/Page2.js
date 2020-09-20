import React, { Component } from "react";

export default class Page2 extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor .",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>{" "}
        {/* e thirim state me this.state i cili eshte i definuar ne konstruktor */}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        {/* Ketu me funksionin changeMessage ne click e ndryshojm permbajtjen e state ne konstruktor
         me setState.  */}
      </div>
    );
  }
}

{
  /*  Ne lidhje me state
      -State i perdorim mbrenda komponetit aktual.
      -State mund te ndryshohen.
      -Te functional components thiren useState Hook.
      -Te class components thiren this.state
      -Konstruktori perdoret vetem ne class components dhe eshte i obligueshem pastaj behet
      definimi i state me this.state ose me Hooks useState.
      -setState bejme ndryshimin e state.




  */
}
