import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import PostList from "../components/PostList";

function PostsPage() {
  const { posts } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={posts}>
        {(loadedEvents) => <PostList posts={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default PostsPage;

async function loadEvents() {
  const database_id = process.env.REACT_APP_NOTION_DATABASE_ID;

  const response = await fetch("http://localhost:3002/" + database_id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    // throw json(
    //   { message: "Could not fetch events." },
    //   {
    //     status: 500,
    //   }
    // );
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
