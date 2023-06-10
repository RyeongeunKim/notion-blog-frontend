import { useEffect, useState } from "react";

import { useRouteLoaderData } from "react-router-dom";

function PostItem({ post }) {
  const { posts } = useRouteLoaderData("posts");
  const [postItems, setPostItems] = useState([]);

  useEffect(() => {
    if (!post.length) return;

    console.log(posts);

    if (post.length > 1) {
      post.forEach((item) => {
        console.log(item);
        if ("numbered_list_item" in item) {
          if (item.numbered_list_item.rich_text.length) {
            console.log(item.numbered_list_item.rich_text[0].plain_text);
          }
        } else if ("paragraph" in item) {
          if (item.paragraph.rich_text.length) {
            console.log(item.paragraph.rich_text[0].plain_text);
          }
        }
      });
    } else {
      console.log(post[0].paragraph.rich_text);
    }
  }, []);
  return (
    <>
      <h1>PostItem</h1>
    </>
  );
}

export default PostItem;
