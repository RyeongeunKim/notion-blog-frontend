import Equation from "./richtext/Equation";
import Mention from "./richtext/Mention";
import Text from "./richtext/Text";

function Paragraph(props) {
  const { id, richTexts } = props;

  const getCompoent = (type, richText, index) => {
    let compoent = null;

    if (type === "Mention") {
      compoent = <Mention id={id} richText={richText} />;
    } else if (type === "equation") {
      compoent = <Equation id={id} richText={richText} />;
    } else if (type === "text") {
      compoent = <Text richText={richText} />;
    }

    return compoent ? <div key={`${id}${index}`}>{compoent}</div> : null;
  };

  return (
    <>
      {richTexts.length ? (
        richTexts.map((item, index) => getCompoent(item.type, item, index))
      ) : (
        <br />
      )}
    </>
  );
}

export default Paragraph;
