import { Link } from "react-router-dom";

import classes from "./PostList.module.css";

function PostList(props) {
  return (
    <div>
      <ul className={classes.list}>
        <li>
          <Link to={`0`}>글 제목 (1)</Link>
        </li>
        <li>
          <Link to={`1`}>글 제목 (2)</Link>
        </li>
      </ul>
    </div>
  );
}

export default PostList;
