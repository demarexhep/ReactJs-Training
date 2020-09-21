import React from "react";
import "./StyleSheet.css";

export default function StyleSheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={className}>Working with css</h1>
    </div>
  );
}
