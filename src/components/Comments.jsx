import SharedComments from './SharedComments'
import Comment from "./Comment";

function Comments({showCmt , instructor}) {
  return <SharedComments showCmt = {showCmt} instructor={instructor} Comment = {Comment} />
}

export default Comments;

