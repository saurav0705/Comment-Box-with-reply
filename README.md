# Comment Box With Reply
Implementation of comment box which many most of the companies uses implementaion in react.
YOU CAN SEE THE DEPLOYED VERSION ON LINK GIVEN BELOW ::
        https://comment-box-with-reply.netlify.com/

## Logic
Whole logic behind the comment box is the reusability of the components.Stpes of how I did this is given below :
1. Created first Component named Post which had three option like,comment,share 
2. Created second component Comment which is taking a comment as an argument.
3. Made an array of Component CommentLine which was taking comment from comment array present in Comment Component.
4. In component CommentLine created a div which was taking again calling component Comment with argument reply. 