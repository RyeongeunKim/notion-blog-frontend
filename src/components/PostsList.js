import { Link } from "react-router-dom";

import classes from "./PostsList.module.css";

function PostsList(props) {
  return (
    <div>
      <h2>All Events</h2>
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

export default PostsList;
