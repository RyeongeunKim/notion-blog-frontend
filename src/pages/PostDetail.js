import { Suspense } from "react";
import { Await, json, defer, useLoaderData } from "react-router-dom";

import PostItem from "../components/Posts/PostItem";

function PostDetailPage() {
  const { blocks } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={blocks}>
        {(loadedPost) => <PostItem blocks={loadedPost} />}
      </Await>
    </Suspense>
  );
}

export default PostDetailPage;

async function loadPost(postId) {
  const block_id = postId;
  const response = await fetch("http://localhost:3002/posts/" + block_id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected post." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.results;
  }
}

export async function loader({ request, params }) {
  const id = params.postId;

  return defer({
    blocks: await loadPost(id),
  });
}
