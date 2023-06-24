import { Link } from "react-router-dom";

import classes from "./ChildPage.module.css";

function ChildPage(props) {
  const { childPage, id } = props;
  const title = childPage.title;
  return (
    <li key={id} className={classes.item}>
      <Link to={`/${id}`} state={{ title }}>
        {title}
      </Link>
    </li>
  );
}

export default ChildPage;
