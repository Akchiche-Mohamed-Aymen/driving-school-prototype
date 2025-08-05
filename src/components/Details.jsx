import { useNavigate, useParams } from "react-router-dom";
import { trainers } from "../utils";
import { IoIosStar , IoIosStarOutline } from "react-icons/io";
import { useMemo, useState } from "react";
import { GoChevronDown , GoChevronUp  } from "react-icons/go";
import Chat from "./Chat"
import Comments from "./Comments";
function getRandomInt(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Details() {
  const navigate = useNavigate();
  const [show , setShow]= useState(false)
  const [showCmt , setShowCmt]= useState(false)
  const { idPhone } = useParams();
  const trainer = trainers.find((t) => t.phone === idPhone);
  const stars = useMemo(()=>getRandomInt(1, 6) , [])
  const size = 25
  return (
    <div className=" w-screen  flex flex-col items-center">
      <div className="shared">
        <i
          className="fa-solid text-lg font-bold fa-house cursor-pointer"
          onClick={() => navigate(-1)}
        ></i>
        <h2 className="text-cyan-700 font-bold">{trainer.school}</h2>
        <img src={trainer.image} className="w-12 h-12 rounded-full" />
      </div>
      <div className="shared border-b-3  border-gray-300 rounded-md">
        <div>
          <h1 className="text-xl font-bold">{trainer.fullName}</h1>
          <p>@{trainer.username}</p>
          <p>
            <i className="fa-solid fa-location-dot"></i> {trainer.wilaya}
          </p>
          <p>
            <i className="fa-solid fa-money-check-dollar"></i> {trainer.price} DA
          </p>

          <p>
            <i className="fa-solid fa-phone"></i> {trainer.phone}
          </p>
        </div>
        <img src={trainer.image} className="w-28 h-28 rounded-md" />
      </div>
      <div className="shared profile">
        <div>
          <div className=" flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <p key={i} className="mt-6">{i < stars ? <IoIosStar color="yellow" size={size}/>: <IoIosStarOutline size={size} color="gray"/>}</p>
            ))}
          </div>
          <h2 className="mt-5">Evaluation</h2>
        </div>
        <div>
          <p>{trainer.experience}</p>
          <h2>Years Experience</h2>
        </div>
        <div>
          <p>{getRandomInt(15, 26)} </p>
          <h2>Students</h2>
        </div>
      </div>
      
      <div className="shared !bg-cyan-500 ">
        <h2 className="text-white font-bold">{!showCmt ?"Show" : "Hide"} what they said about{trainer.fullName}</h2>
        {showCmt ? <GoChevronUp color="white" size={size} onClick={()=>setShowCmt(!showCmt)}/> : <GoChevronDown color="white" size={size} onClick={()=>setShowCmt(!showCmt)}/>  }
      </div>
      <Comments showCmt = {showCmt}  instructor={trainer.fullName}/>
      <div className="shared !bg-cyan-500 mt-3 ">
        <h2 className="text-white font-bold">{!show ?"open" : "close"} chat with {trainer.fullName}</h2>
        {show ? <GoChevronUp color="white" size={size} onClick={()=>setShow(!show)}/> : <GoChevronDown color="white" size={size} onClick={()=>setShow(!show)}/>  }
      </div>
      {show && <Chat trainer={trainer}/>}
    </div>
  );
}

export default Details;
