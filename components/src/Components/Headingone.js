import React from "react";

function Headingone(props) {
  return <h2 style={styles}>{props.genre}</h2>
}

const styles = {
  color: "yellow"
}

export default Headingone;