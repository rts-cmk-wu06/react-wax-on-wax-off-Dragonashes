import React from "react";

function Headingone(props) {
  return <h1 style={styles}>Hey, {props.name} {props.lastname}</h1>
}

const styles = {
  color: "yellow"
}

export default Headingone;