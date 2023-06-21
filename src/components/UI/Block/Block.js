import Paragraph from "./Type/Paragraph";
import Heading from "./Type/Heading";
import Image from "./Type/Image";
import ChildPage from "./Type/ChildPage";

function Block(props) {
  const { blocks } = props;

  const getCompoent = (id, type, item) => {
    // console.log(item);
    let compoent = null;
    const headingRegex = new RegExp("heading*");
    if (type === "child_page") {
      compoent = <ChildPage childPage={item[type]} id={item.id}/>;
    } else if (headingRegex.test(type)) {
      compoent = <Heading heading={item} type={type} />;
    } else if (type === "image") {
      compoent = <Image image={item[type]} />;
    } else if (type === "paragraph") {
      compoent = (
        <Paragraph id={item.id} richTexts={item.paragraph.rich_text} />
      );
    }

    return compoent ? <div key={id}>{compoent}</div> : null;
  };

  return <>{blocks.map((item) => getCompoent(item.id, item.type, item))}</>;
}

export default Block;
