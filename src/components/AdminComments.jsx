import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { getComments } from "../utils";

export default function AdminComments({ showCmt }) {
  const [spin, setSpin] = useState(false);
  const [comments, setComments] = useState([]);
  async function createComments(instructor) {
    const temp = await getComments(instructor);
    console.log(temp)
    setSpin(false);
    setComments(temp);
  }

  useEffect(() => {
    setSpin(true);
    createComments();
  }, [showCmt]);
  if (showCmt) {
    return spin ? (
      <Spinner />
    ) : (
      <div className="w-full md:w-2xl mx-auto">
        {comments.map((c, idx) => (
          <Comment
            key={idx}
            comment={c}
          />
        ))}
      </div>
    );
  }
  return <></>;
}

//-------------------------------
const Comment = ({ comment }) => {
 const [replies , setReplies] = useState([])
  return (
    <>
    <div className="flex items-start space-x-3 p-3  bg-gray-200 rounded-md mt-3">
      {/* Left: Avatar */}
      <img
        src={comment.image}
        alt={comment.username}
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* Right: Username + Text */}
      <div>
        <p className="font-semibold">{comment.username}</p>
        <p className="text-gray-700">{comment.text}</p>
      </div>
    </div>
    <p className="text-gray-400 hover:text-gray-500 pt-1 cursor-pointer">Reply</p>
    </>
  );
};
