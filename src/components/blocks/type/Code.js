import Paragraph from "./Paragraph";

import classes from "./Code.module.css";

function Code(props) {
  const { id, richTexts } = props;
  return (
    <code className={classes}>
      <Paragraph id={id} richTexts={richTexts} />
    </code>
  );
}

export default Code;
