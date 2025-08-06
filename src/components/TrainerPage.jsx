import { useEffect, useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import EditTrainerModal from './Modal'
import { GoChevronDown , GoChevronUp  } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import AdminComments from './AdminComments'

const TrainerPage = () => {
  const [trainer, setTrainer] = useState({});
  const [showCmt , setShowCmt]= useState(false)
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const size = 25
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setTrainer(JSON.parse(stored));
    }
  }, []);
  if (!trainer) return <p>Loading...</p>;

  return (
    <>
    <div className="p-4 w-full md:w-2xl mx-auto space-y-2 shadow-lg rounded-xl bg-white">
      <div className='flex items-center justify-between'>
      <button onClick={() =>navigate(-1) } className="text-cyan-600 hover:text-cyan-800">
        <IoHomeSharp size={24} />
      </button>
      <button onClick={() => setShowModal(true)} className="text-cyan-600 hover:text-cyan-800">
        <MdEdit size={24} />
      </button>

      </div>
      <img src={trainer.image ?? logo} alt={trainer.fullName} className="rounded-full w-32 h-32 mx-auto border-4 border-cyan-400" />
      <div className='pl-5 my-3'>
      <h2 className="text-center text-2xl font-bold">{trainer.fullName}</h2>
      <p className="text-gray-600">@{trainer.username}</p>
      <p className=""><i className="fa-solid fa-school-flag"></i> {trainer.school}</p>
      <p className=""><i className="fa-regular fa-calendar-days"></i> {trainer.experience} years of experience</p>
      <p className=""><i className="fa-solid fa-money-check-dollar"></i> {trainer.price} DA/session</p>
      <p className=" text-sm "><i className="fa-solid fa-phone"></i> {trainer.phone}</p>
      </div>
    </div>
    {showModal && <EditTrainerModal trainer = {trainer}  setTrainer= {setTrainer} setShowModal = {setShowModal}/> }
    <div className="shared mx-auto  !bg-cyan-500 ">
        <h2 className="text-white font-bold">{!showCmt ?"Show" : "Hide"} Comments</h2>
        {showCmt ? <GoChevronUp color="white" size={size} onClick={()=>setShowCmt(!showCmt)}/> : <GoChevronDown color="white" size={size} onClick={()=>setShowCmt(!showCmt)}/>  }
    </div>
    <AdminComments showCmt = {showCmt}  trainer={trainer}/>

    </>
  );
};

export default TrainerPage;



