import { Suspense } from "react";
import { Await, json, defer, useLoaderData } from "react-router-dom";

import ChildItem from "../components/blocks/type/childpage/ChildItem";

function ChildDetailPage() {
  const { child } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={child}>
        {(loadedPost) => <ChildItem blocks={loadedPost} />}
      </Await>
    </Suspense>
  );
}

export default ChildDetailPage;

async function loadPost(blockId) {
  const block_id = blockId;
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
  let id = params.blockId;

  return defer({
    child: await loadPost(id),
  });
}
