import {useState , useEffect} from "react";
import Comment from "./Comment";
import { generateText } from "../utils";
import axios from "axios";
import Spinner from "./Spinner";
async function createMan(){
  const res = await axios.get("https://randomuser.me/api/")
  const g = res.data.results[0]
  if (g.gender !== 'female')
    return g.login.username
  return createMan()
}
function Comments({showCmt , instructor}) {
  const [comments , setComments] = useState([])
  const [spin , setSpin] = useState(false)
  async function createComments(){
    const temp = []
    for(let i = 1 ; i <= 5 ; i++){
      const receive = await generateText(`You are a helpful assistant that acts as a student giving a personal opinion about a driving school instructor ${instructor}. Your response should sound like a learner who has taken driving sessions and is sharing honest, casual feedback about the instructor's teaching style, behavior, and effectiveness.` ,"" , 40 );
      const text = receive[0].message.content
      const image =  `https://randomuser.me/api/portraits/men/${i*10}.jpg`
      const username = await createMan()
      temp.push({text , username , image})
    }
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

