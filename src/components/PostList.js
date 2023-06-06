import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./PostList.module.css";

function PostList(props) {
  const [db, setDB] = useState({});
  const clickHandler = async () => {
    let database_id = process.env.REACT_APP_NOTION_DATABASE_ID;
    fetch("http://localhost:3002/" + database_id).then(async (resp) => {
      console.log(resp);
      setDB(await resp.json());
    });
  };

  useEffect(() => {
    console.log(db);
  }, [db]);

  return (
    <div>
      <button onClick={clickHandler}>테스트버튼</button>
      <ul className={classes.list}>
        <li>
          <Link to={`0`}>글 제목 (1)</Link>
        </li>
        <li>
          <Link to={`1`}>글 제목 (2)</Link>
        </li>
      </ul>
    </div>
  );
}

export default PostList;
