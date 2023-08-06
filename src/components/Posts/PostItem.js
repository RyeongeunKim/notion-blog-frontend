import Block from "../blocks/Block";
import classes from "./PostItem.module.css";

function PostItem({ blocks, title }) {
  return (
    <div className={classes.block}>
      {title && <h1>{title}</h1>}
      <Block blocks={blocks} />
    </div>
  );
}

export default PostItem;
