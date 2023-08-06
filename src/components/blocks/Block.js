import Paragraph from "./type/Paragraph";
import Heading from "./type/Heading";
import Image from "./type/Image";
import ChildPage from "../blocks/type/child-page/ChildPage";
import ListItem from "./type/ListItem";
import Code from "./type/Code";

import classes from "./Block.module.css";

function Block(props) {
  const { blocks } = props;
  let itemList = [];

  return (
    <ul className={classes.list}>
      {blocks.map((item, index) => {
        const { id, type } = item;
        let component = null;
        const headingRegex = new RegExp("heading*");

        if (type === "code") {
          component = <Code id={id} richTexts={item[type].rich_text} />;
        } else if (type === "child_page") {
          component = <ChildPage childPage={item[type]} id={id} />;
        } else if (headingRegex.test(type)) {
          component = <Heading heading={item} type={type} />;
        } else if (type === "image") {
          component = <Image image={item[type]} />;
        } else if (
          type === "quote" ||
          type === "numbered_list_item" ||
          type === "bulleted_list_item"
        ) {
          const endCheck =
            index === blocks.length - 1 || blocks[index + 1].type !== type;
          itemList.push({ id: id, richTexts: item[type].rich_text });

          if (endCheck) {
            component = <ListItem itemList={itemList} type={type} />;

            itemList = [];
          }
        } else if (type === "paragraph") {
          component = <Paragraph id={id} richTexts={item[type].rich_text} />;
        }

        return component ? <div key={id}>{component}</div> : null;
      })}
    </ul>
  );
}

export default Block;
