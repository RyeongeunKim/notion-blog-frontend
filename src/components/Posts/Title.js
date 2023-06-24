import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Title.module.css";

function Title(props) {
  const { posts } = props;
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    let postList = [];

    if (posts.length) {
      posts.forEach((post) => {
        const { properties } = post;

        for (const key in properties) {
          if (properties[key].type === "title") {
            const [title] = properties[key].title;
            const titleText = !title ? "" : title.plain_text;
            const item = {
              id: post.id,
              title: titleText,
            };
            postList.push(item);
          }
        }
      });
    }

    setPostList(postList);
  }, []);

  return (
    <div>
      <div className={classes.list}>
        {postList.length ? (
          postList.map(({ id, title }) => (
            <p key={id}>
              <Link to={`${id}`} state={{ title }}>
                {title}
              </Link>
            </p>
          ))
        ) : (
          <h3>작성한 글이 없습니다.</h3>
        )}
      </div>
    </div>
  );
}
export default Title;
