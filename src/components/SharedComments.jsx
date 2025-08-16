import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { getComments } from "../utils";

export default function SharedComments({ showCmt, Comment }) {
  const [comments, setComments] = useState([]);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setSpin(true);
    setTimeout(() => {
      const temp = getComments();
      setSpin(false);
      setComments(temp);
    }, 1000);
  }, [showCmt]);
  if (showCmt) {
    return spin ? (
      <Spinner />
    ) : (
      <div className=" flex flex-col items-center gap-3 my-2  mx-auto">
        {comments.map((c, idx) => (
          <Comment key={idx} comment={c} />
        ))}
      </div>
    );
  }
  return <></>;
}
