import { useLocation } from "react-router-dom";

import Block from "../blocks/Block";

function PostItem({ blocks }) {
  // const {
  //   state: { title },
  // } = useLocation();

  return (
    <div>
      {/* <h1>{title}</h1> */}
      <Block blocks={blocks} />
    </div>
  );
}

export default PostItem;
