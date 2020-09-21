import React from "react";

const header = {
  fontSize: "72px",
  color: "blue",
};

export default function InlineStyle() {
  return (
    <div>
      <h1 style={header}>Styling from Inline</h1>
    </div>
  );
}
