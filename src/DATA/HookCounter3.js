import React, { useState } from "react";

//Perdorimi i hooks useState funksionit ne lidhje me objektet.

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="firstName"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="lastName"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your firstName is : {name.firstName}</h2>
        <h2>Your lastName is : {name.lastName}</h2>
      </form>
    </div>
  );
}
// ne class componetat state i ben merge propertit
//ndersa me hooks me funksional componetet useState funksioni nuk i bon merge prandaj perdorimin ...name qe ta ruaj
export default HookCounter3;
