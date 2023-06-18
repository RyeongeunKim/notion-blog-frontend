import Equation from "./RichText/Equation";
import Mention from "./RichText/Mention";
import Text from "./RichText/Text";

function Paragraph(props) {
  const { id, richTexts } = props;

  const getCompoent = (type, richText, index) => {
    switch (type) {
      case "text":
        return <Text id={`${id}${index}`} richText={richText} />;
      case "Mention":
        return <Mention id={`${id}${index}`} richText={richText} />;
      case "equation":
        return <Equation id={`${id}${index}`} richText={richText} />;
      default:
        return;
    }
  };

  const richText = richTexts.map((item, index) =>
    getCompoent(item.type, item, index)
  );

  return <div key={id}>{!richTexts.length ? <br /> : richText}</div>;
}

export default Paragraph;
