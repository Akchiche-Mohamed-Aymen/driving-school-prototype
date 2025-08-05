import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "12px",
    marginBottom: "18px",
    backgroundColor: "#f9f9f9",
    maxWidth: "350px",
    width: "100%",
  },
  info: {
    flex: 1,
    marginRight: "16px",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "50%",
  },
};

export default function TrainerCard({ trainer }) {
  const ref = useRef();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
 
        <div
        onMouseOver={()=>setShow(true)}
        onMouseOut={()=>setShow(false)}
        onClick={()=>navigate(trainer.phone)}
        ref={ref}
          style={styles.card}
          className={`transition-all duration-500 ease-in-out transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          } flex-col cursor-pointer  shadow mx-6 hover:shadow-cyan-400`}
        >
          <div className="h-48 w-full flex items-center rounded-md justify-center bg-cyan-500">
            <img
              src={trainer.image}
              alt={trainer.fullName}
              style={styles.image}
              className="outline-3  outline-white p-1 scale-95 hover:scale-105 hover:rotate-z-90 duration-75"
            />
          </div>
          <div style={styles.info} className="data">
            <h1 className="text-xl font-bold">{trainer.fullName}</h1>
            <p>@{trainer.username}</p>
            <p>
              <i className="fa-solid fa-school-flag"></i> {trainer.school}
            </p>
            <p>
              <i className="fa-regular fa-calendar-days"></i> {trainer.experience}{" "}
              years
            </p>
            <p>
              <i className="fa-solid fa-money-check-dollar"></i> {trainer.price } DA
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> {trainer.phone}
            </p>
          </div>{" "}
          {/*<button className={`w-44  rounded-md bg-cyan-500 transition-all duration-500 ease-in-out transform hover:bg-cyan-700 text-white  ${
            show ? "opacity-100 scale-100 px-3 py-2 my-2" : "opacity-0 scale-90 px-0 py-0 w-0"
          }`}>Contact</button>*/}
        </div>

  );
}
