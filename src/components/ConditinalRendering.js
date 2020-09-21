import React, { Component } from "react";

export default class ConditinalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: true,
    };
  }

  render() {
    // { ------------ Metoda e pare
    // if (this.state.isLogedIn)
    //       return (
    //       <div>
    //           <h1>Welcome Rexhep</h1>
    //       </div>
    //       );
    //   } else {
    //     return (
    //       <div>
    //         <h1>Welcome Guest</h1>
    //       </div>
    //     );
    //   }
    //   //  -----------------------------Metoda e 2
    //   let message;
    //   if (this.state.isLogedIn) {
    //     message = <div>Welcome Rexhep</div>;
    //   } else {
    //     message = <div>Welcome Guest</div>;
    //   }
    //   return <div>{message}</div>;
    //   // -------------- Metoda 3 me e thjeshta
    //   return this.state.isLogedIn ? (
    //     <div>Welcome Rexhep</div>
    //   ) : (
    //     <div>Welcome Guest</div>
    //   );
    return <div></div>;
  }
}
