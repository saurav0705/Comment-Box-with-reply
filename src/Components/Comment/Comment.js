import React, { useState, useEffect } from 'react';
import './Comment.css';
import CommentList from '../CommentLine/CommentLine';
const Comment = ({comment}) => {
    const [comments,setComments] = useState([]);
    useEffect(()=>{

        if(comment.length!==0){
        let cmts = comments;
        setComments([...cmts,comment]);}

    },[comment])
    
    return(
        <div className="comment">
            {comments.map(cmt => {
                return (<CommentList text={cmt}/>)
            })}
        </div>
    )
};

export default Comment;