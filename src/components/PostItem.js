import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

function PostItem({ blocks }) {
  const {
    state: { title },
  } = useLocation();

  const [contents, setContents] = useState([]);

  useEffect(() => {
    let contents = [];

    if (blocks.length) {
      blocks.forEach((item) => {
        let id = item.id;
        let richTexts = [];
        let plainText = "";
        let content;

        if (item.type === "paragraph") {
          richTexts = item.paragraph.rich_text;
        } else if (item.type === "numbered_list_item") {
          richTexts = item.numbered_list_item.rich_text;
        }

        if (richTexts.length) {
          plainText = richTexts[0].plain_text;
        }

        if (plainText) {
          content = { id, plainText };
          contents.push(content);
        }
      });
    }

    setContents(contents);
  }, []);

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {contents.length ? (
          contents.map(({ id, plainText }) => <li key={id}>{plainText}</li>)
        ) : (
          <p>글 내용이 없습니다</p>
        )}
      </ul>
    </div>
  );
}

export default PostItem;
