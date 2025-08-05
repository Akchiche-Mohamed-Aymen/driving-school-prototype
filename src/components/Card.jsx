import { useNavigate } from "react-router-dom";

function Card({ image, label, to }) {
  const navigate = useNavigate();
  return (
    <div
      className="group flex flex-col items-center cursor-pointer"
      onClick={() => navigate(to)}
    >
      <img
        src={image}
        name="acc"
        className="w-32 h-32 rounded-md shadow hover:shadow-cyan-300 transition"
      />
      <span>{label}</span>
    </div>
  );
}

export default Card;
