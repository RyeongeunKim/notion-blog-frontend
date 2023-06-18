import { useLocation } from "react-router-dom";

import Block from "../UI/Block/Block";

function PostItem({ blocks }) {
  const {
    state: { title },
  } = useLocation();

  // const [contents, setContents] = useState([]);

  // useEffect(() => {
  //   let contents = [];

  //   if (blocks.length) {
  //     // console.log("blocks = ", blocks);
  //     blocks.forEach((item) => {
  //       let id = item.id;
  //       let richTexts = [];
  //       let plainText = "";
  //       let content;

  //       if (item.type === "paragraph") {
  //         richTexts = item.paragraph.rich_text;
  //       } else if (item.type === "numbered_list_item") {
  //         richTexts = item.numbered_list_item.rich_text;
  //       }

  //       if (richTexts.length) {
  //         plainText = richTexts[0].plain_text;
  //       }

  //       if (plainText) {
  //         content = { id, plainText };
  //         contents.push(content);
  //       }
  //     });
  //   }

  //   setContents(contents);
  // }, []);

  return (
    <div>
      <h1>{title}</h1>
      <Block blocks={blocks} />
    </div>
  );
}

export default PostItem;
