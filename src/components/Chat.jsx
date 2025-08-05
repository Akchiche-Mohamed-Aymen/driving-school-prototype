import { useState } from "react";
import { generateText } from "../utils";
import { FaTelegram } from "react-icons/fa6";

export default function Chat() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      send: "السلام عليكم اريد التسجيل عندك",
      receive: "وعليكم السلام، نعم  بالطبع, مرحبا بك ",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = async () => {

    if (input.trim() !== "") {
      setLoading(true)
      try {
        const receive = await generateText('You are a helpful assistant that acts as trainer in a driving school.' , input);
        setLoading(false)
        setMessages([...messages , {send : input , receive : receive[0].message.content}]);
      } catch(error) {
        console.log(error)
        setLoading(false)
        setMessages([
          ...messages,
          { send: input, receive: "اسف  ليس لدي رد حول هذا" },
        ]);
      }

      setInput("");
    }
  };
  return (
    <div className="bg-[#fffafa]  w-full md:w-2xl p-2">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {messages.map((msg, index) => (
          <div key={index}>
            <div className="flex justify-end mb-4">
              <div className="bg-blue-400 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[75%] text-sm">
                {msg.send}
              </div>
            </div>
            <div className="flex justify-start">
              <div className = {` py-2  rounded-bl-sm max-w-[75%] text-sm`}>
                {loading && index === messages.length - 1 ? (
                  <div className="loader mx-3 text-gray-600 "></div>
                ): <div className="bg-gray-200 p-2 rounded-2xl rounded-br-sm text-gray-800 ">{msg.receive}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center  px-4 py-3 border-t bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="أكتب رسالة..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
        <button
          onClick={handleSend}
          className="  px-4 py-2 rounded-full text-sm "
        >
          <FaTelegram color="blue" size={35}/>
        </button>
      </div>
    </div>
  );
}
