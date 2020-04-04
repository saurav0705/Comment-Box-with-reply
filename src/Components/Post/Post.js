import React, { useState } from 'react';
import './Post.css';
import Comment from '../Comment/Comment';
const Post = () => {
    const [show , setShow ] = useState(false);
    const [comment,setComment] = useState('');
    const [sub,setSubmit] = useState('');

    const commentInput = (event) => {
        setComment(event.target.value);
    }
    const submit = (event) => {
        var code = event.keyCode || event.which;
    if(code === 13) {
        setSubmit(comment);
        setComment('');
    } 
    }
    return (<div className="post">
        <div className="post-content">
            <h1>SOME RANDOM POST</h1>
        </div>
        <div className="post-options">
            <div className="tile">LIKE</div>
            <div className="tile" onClick={()=> setShow(!show)} >Comment</div>
            <div className="tile">Share</div>
        </div>
        <div className={show ? "comment-main":"none"}>
            <input type="text" value={comment} className="comment-input" placeholder="comment ..." onChange={(event) => {commentInput(event)}} onKeyPress={(event)=> submit(event)}/>
        </div>
        <div>
            <Comment comment={sub} />
        </div>
        </div>)
}

export default Post;