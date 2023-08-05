import { Suspense } from "react";
import { defer, Await, json, useRouteLoaderData, useLoaderData } from "react-router-dom";

import PostList from "../components/posts/PostList";

function PostsPage() {
  // const { posts } = useLoaderData();
  const { posts } = useRouteLoaderData("posts");

  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Await resolve={posts}>
        {(loadedEvents) => <PostList posts={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default PostsPage;

async function loadEvents() {
  const database_id = process.env.REACT_APP_NOTION_DATABASE_ID;

  const response = await fetch("http://localhost:8080/posts/" + database_id, {
    method: "POST",
  });

  if (!response.ok) {
    throw json(
      { message: "Could not fetch posts." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.results;
  }
}

export function loader() {
  return defer({
    posts: loadEvents(),
  });
}
