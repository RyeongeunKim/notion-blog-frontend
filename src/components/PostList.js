import { Link } from "react-router-dom";

import classes from "./PostList.module.css";

function PostList({ posts }) {
  return (
    <div>
      <ul className={classes.list}>
        {posts.map((post, index) => (
          <li key={post.id}>
            <Link to={`${post.id}`}>{posts[index].properties["이름"].title[0].plain_text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
