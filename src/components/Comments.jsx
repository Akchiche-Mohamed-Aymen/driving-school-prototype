import {useState , useEffect} from "react";
import Comment from "./Comment";
import { getComments } from "../utils";
import Spinner from "./Spinner";
function Comments({showCmt , instructor}) {
  const [comments , setComments] = useState([])
  const [spin , setSpin] = useState(false)
  async function createComments(){
   const temp = await getComments(instructor)
    setSpin(false)
    setComments(temp)      
  }
 
  useEffect(()=>{
    setSpin(true)
    createComments()
  } , [showCmt])
  if(showCmt){
   
    return spin ? <Spinner/> : (
      <div className="w-full md:w-2xl gap-4 flex items-center p-2 h-fit overflow-x-auto overflow-y-hidden  bg-gray-50 rounded-lg shadow-inner space-x-4">
        {comments.map((c, idx) => (
          <Comment
            key={idx}
            image={c.image}
            username={c.username}
            text={c.text}
          />
        ))}
      </div>
    );}
  return <></>
}

export default Comments;

