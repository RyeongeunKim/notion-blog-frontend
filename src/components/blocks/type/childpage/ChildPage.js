import { Link } from "react-router-dom";

function ChildPage(props) {
  const { childPage, id } = props;
  const title = childPage.title;
  return (
    <Link to={`/posts/${id}`} state={{ title }}>
      {title}
    </Link>
  );
}

export default ChildPage;
