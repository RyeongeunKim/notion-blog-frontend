import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Await, useLoaderData } from "react-router-dom";
import Title from "./Title";

import classes from "./PostsNavigation.module.css";

function PostsNavigation() {
  const { posts } = useLoaderData();

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
                      className={classes.navLink}
                      end
                      onClick={() => console.log("Link clicked!", loaded.id)}
                    >
                      {loaded[loaded.type]}
                      <Title loaded={loaded} />
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
