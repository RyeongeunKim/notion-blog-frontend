import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import PostContext from "../store/post-context";
import PostItem from "../components/posts/PostItem";

function PostDetailPage() {
  const { postId } = useContext(PostContext);
  const { state } = useLocation();
  const pageTitle = state?.title || "";
  const [postDetails, setPostDetails] = useState({
    title: "",
    postList: [],
  });

  useEffect(() => {
    if (!postId) return;

    const fetchPostDetails = async () => {
      try {
        // console.log("API 호출");
        const url = process.env.REACT_APP_LOCAL_URL;
        const response = await fetch(`${url}/posts/` + postId);
        if (!response.ok) {
          console.error("Could not fetch details for selected post.");
        } else {
          const { results } = await response.json();
          setPostDetails((prevState) => ({
            ...prevState,
            postList: results,
            title: pageTitle,
          }));
        }
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPostDetails();
  }, [postId, pageTitle]);

  return (
    <div>
      {postId && postDetails.postList.length ? (
        <PostItem blocks={postDetails.postList} title={postDetails.title} />
      ) : null}
    </div>
  );
}

export default PostDetailPage;
