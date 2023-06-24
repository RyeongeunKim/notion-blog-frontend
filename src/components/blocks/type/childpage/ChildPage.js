import { Link } from "react-router-dom";

function ChildPage(props) {
  const { childPage, id } = props;
  const title = childPage.title;
  return (
    <Link to={`/${id}`} state={{ title }}>
      {title}
    </Link>
  );
}

export default ChildPage;
