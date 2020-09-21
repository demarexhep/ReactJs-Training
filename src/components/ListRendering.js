import React from "react";
import Personlist from "./Personlist";

export default function ListRendering() {
  const names = ["rexhep", "artan", "blerton"];
  const persons = [
    {
      id: 1,
      name: "rexhep",
      state: "Macedonia",
      age: 17,
    },
    {
      id: 2,
      name: "artan",
      state: "tetovo",
      age: 34,
    },
    {
      id: 3,
      name: "florim",
      state: "skopje",
      age: 22,
    },
  ];
  // ky ushtrim eshte i lidhur componentin Personlist.js
  // ktu nga ktu i transferojm te dhenat ne personlist nepermjet props, sigurisht key nuk duhet anashkalohet.

  //Metoda e 3 me props lidhur me komponentin Personlist
  //   const PersonList = persons.map((person) => (
  //     <Personlist key={person.id} person={person} />
  //   ));
  //   return <div>{PersonList}</div>;

  //   Metoda 2 me e perdorur
  //   const PersonList = persons.map((person) => (
  //     <h2>
  //       I am {person.name} from {person.state} and I am {person.age} years old, My
  //       id is : {person.id}
  //     </h2>
  //   ));
  //   return <div>{PersonList}</div>;

  //   return ( Metoda e 1
  //     <div>
  //       {names.map((name) => (
  //         <h2>{name}</h2>
  //       ))}
  //     </div>
  //   );

  //Njesi tjeter index as Key
  //Menyra me e mire eshte te krijojme index pastaj tja japim key={index} eshte e lejuar dhe me e perdorur.
  //   const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  //   return <div>{nameList}</div>;
}
