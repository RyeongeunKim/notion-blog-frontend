import Paragraph from "./Type/Paragraph";

function Block(props) {
  const { blocks } = props;

  const getCompoent = (type, item) => {
    // console.log(item);
    switch (type) {
      case "paragraph":
        return <Paragraph id={item.id} richTexts={item.paragraph.rich_text} />;
      default:
        break;
    }
  };

  const block = blocks.map((item) => getCompoent(item.type, item));

  return <div>{block}</div>;
}

export default Block;
