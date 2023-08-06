import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./ChildPage.module.css";
import PostContext from "../../../../store/post-context";

function ChildPage(props) {
  const { childPage, id } = props;
  const postCtx = useContext(PostContext);
  const title = childPage?.title || "";

  const changePostIdHandler = (postId) => {
    postCtx.changePostId(postId);
  };

  return (
    <li key={id} className={classes.item}>
      <Link
        to={`/post/detail`}
        state={{ title }}
        onClick={() => changePostIdHandler(id)}
      >
        {title}
      </Link>
    </li>
  );
}

export default ChildPage;
