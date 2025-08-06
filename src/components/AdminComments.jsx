import SharedComments from "./SharedComments";
import { useState } from "react";
import logo from '../assets/logo.png'

export default function AdminComments({ showCmt, trainer }) {
  return (
    <SharedComments
      showCmt={showCmt}
      instructor={trainer?.fullName}
      Comment={Comment}
    />
  );
}

//-------------------------------
const Comment = ({ comment  }) => {
  const [replies, setReplies] = useState([]);
  const [show, setShow] = useState(false);
  const trainer = JSON.parse(localStorage.getItem("user"))
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
      <p
        className="text-gray-400 hover:text-gray-500 pt-1 cursor-pointer"
        onClick={() => setShow(true)}
      >
        Reply
      </p>
      {show && <Reply setShow={setShow} setReplies = {setReplies}/>}
      <Replies replies = {replies} trainer={trainer} />
    </>
  );
};

const Reply = ({ setShow , setReplies }) => {
  const [reply, setReply] = useState("");
  const handleCancel = () => {
    setShow(false);
  };
  const handleSend = () => {
    setReplies(replies => [...replies , reply]);
    handleCancel()
  };
  return (
    <div className="modal">
    <div className=" bg-gray-400 w-full md:w-2xl h-fit mx-auto p-4">
      <label className="block text-white mb-2 text-lg font-semibold">
        Reply to comment :
      </label>
      <textarea
        className="w-full h-34 bg-gray-200 p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Type your reply..."
      />
      <div className="mt-3 flex justify-end gap-3">
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};



function Replies({ replies , trainer }) {
  return (
    <div className="space-y-4 mt-2">
      {replies.map((reply, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 bg-gray-100 ml-5 p-2 rounded-md shadow-sm"
        >
          {/* 👈 Image on the left */}
          <img
            src={trainer.image ?? logo}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* 👉 Reply text */}
          <div>
            <p className="font-semibold text-sm">{trainer.fullName || "Anonymous"}</p>
            <p className="text-sm text-gray-700">{reply}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

