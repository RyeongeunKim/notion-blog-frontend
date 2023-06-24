import Paragraph from "./type/Paragraph";
import Heading from "./type/Heading";
import Image from "./type/Image";
import ChildPage from "../blocks/type/childpage/ChildPage";
import NumberedListItem from "./type/NumberedListItem";

function Block(props) {
  const { blocks } = props;

  const getCompoent = (id, type, item) => {
    // console.log(item);
    let compoent = null;
    const headingRegex = new RegExp("heading*");
    if (type === "child_page") {
      compoent = <ChildPage childPage={item[type]} id={item.id} />;
    } else if (headingRegex.test(type)) {
      compoent = <Heading heading={item} type={type} />;
    } else if (type === "image") {
      compoent = <Image image={item[type]} />;
    } else if (type === "paragraph" || type === "numbered_list_item") {
      compoent = <Paragraph id={item.id} richTexts={item[type].rich_text} />;
    }

    return compoent ? <div key={id}>{compoent}</div> : null;
  };

  return <>{blocks.map((item) => getCompoent(item.id, item.type, item))}</>;
}

export default Block;
