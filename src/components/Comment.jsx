function Comment({ image, username, text }) {
    return (
      <div className="w-80  transform transition duration-300 hover:scale-105  h-fit bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between text-center">
        <img
          src={image}
          alt={username}
          className="w-20 h-20 rounded-full object-cover border-4 border-cyan-400 shadow"
        />
        <div>
          <h2 className="text-lg font-semibold text-cyan-700">@{username}</h2>
          <p className="text-gray-600 mt-2 text-sm">{text}</p>
        </div>
      </div>
    );
  }
  
  export default Comment;
  