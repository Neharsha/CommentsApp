// Write your code here
import {formateDistanceToNow} from "date-fns"
import "./index.css"

const CommentItem=props=>{
    const {commentDetails}=props 
    const {name,id,comment,isLiked,initialClassName,date}= commentDetails 
    const initial=name?name[0].toUpperCase():''
    const likeTextClassName=isLiked?"button active":'button'
    const likeImageUrl=isLiked?:
    "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
    "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"

    const postedTime=formatDistanceToNow(date)

    const onClickLike=()=>{
        const {toggleIsLiked}=props 
        toggleIsLiked(id)
    }

    const onDeleteComment=()={
        const {deleteComment}=props 
        deleteComment(id)
    }

    return (
        <li className="comment-item">
            <div className="comment-container">
                <div className={initialClassName}>
                    <p className="initial">{initial}</p>
              </div>
              <div className="username-time-container">
              <p className="username"> {name}</p>
              <p className="time"> {postedTime} ago</p>
                  </div>
              <div className="buttons-container">
              <div className="like-container">
                  <img src={likeImageUrl} alt="like" className="like-image"/>
                  <button className="likeTextClassName" type="button" onClick ={this.onClickLike}>Like</button>
                  <button className="deltebutton" type="button" data-testid="delete" onClick={this.onDeleteComment}><img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete"/></button>
              </div>
              </div>
                  
                  </div>
            
         <hr/>
                 


            </li>
    )
}

export default CommentItem