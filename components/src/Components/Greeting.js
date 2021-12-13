import Headingone from "./Headingone";
import Headingtwo from "./Headingtwo";
import Headingthree from "./Headingthree";

function Greeting(props) {
  console.log(props)
  return (
    <div style={{
      border: "solid 1px red",
      padding: "15px",
      marginbottom: "10px"
    }}>
      {/* <Headingone name={props.name} lastname={props.lastname} /> */}
      <Headingone {...props} />
      <Headingtwo {...props} />
      <Headingthree {...props} />
    </div>
  );
}

const styles = {
  color: "yellow"
}

export default Greeting;