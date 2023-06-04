import { Link } from "react-router-dom";

import classes from './PostsList.module.css'

function PostsList(props) {
  return (
    <div>
      <h2>All Events</h2>
      <ul className={classes.list}>
        <li>글 제목 (1)</li>
        <li>글 제목 (2)</li>
        {/* {events.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default PostsList;
