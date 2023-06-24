import { Suspense } from "react";
import { Await, json, defer, useLoaderData } from "react-router-dom";

import PostItem from "../components/posts/PostItem";

function PostDetailPage() {
  const loaderData = useLoaderData();
  let resolveData = null;

  console.log(loaderData);

  if ("blocks" in loaderData) {
    resolveData = loaderData.blocks;
  }

  if ("child" in loaderData) {
    resolveData = loaderData.child;
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={resolveData}>
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
  let id = params.postId;

  if ("blockId" in params) {
    id = params.blockId;
    console.log("id = ", id);
    return defer({
      child: await loadPost(id),
    });
  } else {
    return defer({
      blocks: await loadPost(id),
    });
  }
}
