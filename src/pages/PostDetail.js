import { useContext, useEffect, useState } from "react";
import PostContext from "../store/post-context";
import PostItem from "../components/posts/PostItem";

function PostDetailPage() {
  const { postId } = useContext(PostContext);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (!postId) return;

    (async () => {
      const response = await fetch("http://localhost:8080/posts/" + postId);
      if (!response.ok) {
        console.error("Could not fetch details for selected post.");
      } else {
        const { results } = await response.json();
        setPostList(results);
      }
    })();
  }, [postId]);

  return (
    <div>
      {postId && postList.length ? <PostItem blocks={postList} /> : null}
    </div>
  );
}

export default PostDetailPage;
