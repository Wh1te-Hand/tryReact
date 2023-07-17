import React from "react";

const PostItem = (props)=>{
    return(
        <div className='post' >
        <div className='post_content'>
          <strong>{props.data.id}. {props.data.title}</strong>
          <div>{props.data.body}</div>
        </div>
        <div className='post_btn'>
          <button>Delete</button>
        </div>
      </div>
    )
}

export default PostItem;