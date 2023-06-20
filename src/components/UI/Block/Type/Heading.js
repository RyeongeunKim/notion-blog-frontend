import { useRef } from "react";

function Heading(props) {
  const { heading, type } = props;
  const ref = useRef("");

  console.log(heading[type]);
  console.log(ref);

  return <div>헤딩입니당</div>;
}

export default Heading;
