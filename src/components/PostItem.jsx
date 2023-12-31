import React from "react";
import ButtonInput from "./UI/buttons/ButtonInput";

const PostItem = (props)=>{
    return(
        <div className='post' >
        <div className='post_content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className='post_btn'>
          <ButtonInput onClick={()=>props.remove(props.post)}>Delete</ButtonInput>
        </div>
      </div>
    )
}

export default PostItem;