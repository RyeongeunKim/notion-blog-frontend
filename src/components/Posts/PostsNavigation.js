import { Suspense, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Await, useLoaderData } from "react-router-dom";
import Title from "./Title";
import classes from "./PostsNavigation.module.css";
import PostContext from "../../store/post-context";

function PostsNavigation() {
  const postCtx = useContext(PostContext);

  const { posts } = useLoaderData();

  const changePostIdHandler = (postId) => {
    postCtx.changePostId(postId);
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
                      to={"post"}
                      className={classes.navLink}
                      end
                      onClick={() => changePostIdHandler(loaded.id)}
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
