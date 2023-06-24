import Paragraph from "./type/Paragraph";
import Heading from "./type/Heading";
import Image from "./type/Image";
import ChildPage from "../blocks/type/childpage/ChildPage";
import ListItem from "./type/ListItem";
import Code from "./type/Code";

function Block(props) {
  const { blocks } = props;
  let itemList = [];

  const getCompoent = (item, index) => {
    const { id, type } = item;
    console.log(item);
    let compoent = null;
    const headingRegex = new RegExp("heading*");
    if (type === "code") {
      compoent = <Code id={id} richTexts={item[type].rich_text} />;
    } else if (type === "child_page") {
      compoent = <ChildPage childPage={item[type]} id={id} />;
    } else if (headingRegex.test(type)) {
      compoent = <Heading heading={item} type={type} />;
    } else if (type === "image") {
      compoent = <Image image={item[type]} />;
    } else if (
      type === "quote" ||
      type === "numbered_list_item" ||
      type === "bulleted_list_item"
    ) {
      const endCheck =
        index === blocks.length || blocks[index + 1]?.type !== type;

      if (endCheck) {
        itemList.push({ id: id, richTexts: item[type].rich_text });

        compoent = <ListItem itemList={itemList} type={type} />;

        itemList = [];
      } else {
        itemList.push({ id: id, richTexts: item[type].rich_text });
      }
    } else if (type === "paragraph") {
      compoent = <Paragraph id={id} richTexts={item[type].rich_text} />;
    }

    return compoent ? <div key={id}>{compoent}</div> : null;
  };

  return <>{blocks.map((item, index) => getCompoent(item, index))}</>;
}

export default Block;
