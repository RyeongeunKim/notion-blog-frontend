import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./PostList.module.css";

function PostList({ posts }) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    let postList = [];

    if (posts.length) {
      posts.forEach((post) => {
        const titles = post.properties["이름"].title;
        const title = titles.length ? titles[0].plain_text : "제목 없음";
        const item = {
          id: post.id,
          title,
        };
        postList.push(item);
      });
    }

    setPostList(postList);
  }, []);

  return (
    <div>
      <ul className={classes.list}>
        {postList.length ? (
          postList.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ title }}>
                {title}
              </Link>
            </li>
          ))
        ) : (
          <h3>글 목록이 없습니다</h3>
        )}
      </ul>
    </div>
  );
}

export default PostList;
