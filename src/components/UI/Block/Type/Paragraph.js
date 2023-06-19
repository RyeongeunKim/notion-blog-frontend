import Equation from "./RichText/Equation";
import Mention from "./RichText/Mention";
import Text from "./RichText/Text";

function Paragraph(props) {
  const { id, richTexts } = props;
  console.log("Paragraph = ", props);

  const getCompoent = (type, richText, index) => {
    switch (type) {
      case "text":
        return <Text id={id} richText={richText} />;
      case "Mention":
        return <Mention id={id} richText={richText} />;
      case "equation":
        return <Equation id={id} richText={richText} />;
      default:
        return;
    }
  };

  const richText = richTexts.map((item, index) =>
    getCompoent(item.type, item, index)
  );

  return !richTexts.length ? <br /> : richText;
  // return <div key={id}>{!richTexts.length ? <br /> : richText}</div>;
}

export default Paragraph;
