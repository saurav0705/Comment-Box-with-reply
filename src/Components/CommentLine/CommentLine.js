import React,{useState} from 'react';
import Comment from '../Comment/Comment';
import './CommentLine.css';
const CommentList = ({text}) => {
    const [reply,setReply] = useState('');
    const [subreply,setSubmit] = useState('');
    const commentReply = (event) => {
        setReply(event.target.value);
    }
    const submit = (event) => {
        var code = event.keyCode || event.which;
    if(code === 13) {
        setSubmit(reply);
        setReply('');
        console.log(reply);
    } 
    }
    return (
        <div className="margin">
        <div className="comment-text">{text}</div>
        <div className="comment-reply-input">
            <input type="text" className="reply-input" placeholder="reply..." value={reply} onChange={(event) => {commentReply(event)}} onKeyPress={(event)=> submit(event)}/>
        </div>
        <div>
            <Comment comment={subreply}/>
            </div>
        </div>
    )
};


export default CommentList;