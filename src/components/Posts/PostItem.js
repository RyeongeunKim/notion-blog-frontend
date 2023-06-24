import { useLocation } from "react-router-dom";

import Block from "../blocks/Block";
import classes from "./PostItem.module.css";

function PostItem({ blocks }) {
  const { state } = useLocation();
  let title = null;

  if (state?.title) {
    title = state.title;
  }

  return (
    <div className={classes.block}>
      {title && <h1>{title}</h1>}
      <Block blocks={blocks} />
    </div>
  );
}

export default PostItem;
