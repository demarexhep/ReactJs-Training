import React from "react";

export default function Personlist({ person }) {
  return (
    <div>
      <h2>
        I am {person.name} from {person.state} and I am {person.age} years old,
        My id is : {person.id}
      </h2>
    </div>
  );
}
