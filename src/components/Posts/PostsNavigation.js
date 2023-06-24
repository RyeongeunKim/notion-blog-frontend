import { useState } from "react";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import {
  defer,
  Await,
  json,
  useRouteLoaderData,
  useLoaderData,
} from "react-router-dom";

import classes from "./PostsNavigation.module.css";

function PostsNavigation() {
  const { posts } = useLoaderData();

  const getTitle = (loaded) => {
    let resultTitle = "";
    const { properties } = loaded;

    for (const key in properties) {
      if (properties[key].type === "title") {
        const [title] = properties[key].title;
        if (title?.plain_text) {
          resultTitle = title.plain_text;
        }
      }
    }

    return resultTitle;
  };

  return (
    <Suspense
      fallback={
        <header className={classes.header}>
          <p>Loading...</p>
        </header>
      }
    >
      <Await resolve={posts}>
        {(loadedEvents) => (
          <header className={classes.header}>
            <nav>
              <ul className={classes.list}>
                {loadedEvents.map((loaded) => (
                  <li key={loaded.id}>
                    <NavLink
                      to={`${loaded.id}`}
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                      end
                    >
                      {loaded[loaded.type]}
                      {getTitle(loaded)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        )}
      </Await>
    </Suspense>
  );
}

export default PostsNavigation;
