import { useParams } from "react-router-dom";

function PostDetailPage() {
  const params = useParams();

  return (
    <div>
      <h1>PostDetailPage</h1>
      <p>Post ID: {params.postId}</p>
    </div>
  );
}

export default PostDetailPage;
