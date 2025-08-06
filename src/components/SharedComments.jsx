import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { getComments } from "../utils";

export default function SharedComments({showCmt , instructor , Comment }) {
    const [comments , setComments] = useState([])
    const [spin , setSpin] = useState(false)
    async function createComments(){
        const temp = await getComments(instructor)
         setSpin(false)
         setComments(temp)      
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
