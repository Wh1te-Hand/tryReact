import React, { useState } from 'react';
import {UseState} from 'react';
import ButtonInput from './UI/buttons/ButtonInput';
import MyInput from './UI/inputs/MyInput';

const PostFormCreator=({create})=>{
    const [post,setPost]=useState({title:'',body:''})

    function addNewPost(e){
        e.preventDefault();
        const newPost={...post,id:Date.now()}; 
        create(newPost)
        setPost({title:'',body:''})
       }

return(
    <form>
      <MyInput 
        value={post.title} 
        onChange={e=>setPost({...post,title:e.target.value})} 
        type="text" 
        placeholder="Name of post">
      </MyInput>

      {/* <MyInput
      ref={bodyRef}
        type="text"
        placeholder="Description">
       </MyInput> */}

       <MyInput
        value={post.body}
        onChange={e=>setPost({...post,body:e.target.value})}
        type="text"
        placeholder="Description">
       </MyInput>

      <ButtonInput onClick={addNewPost}>Add</ButtonInput>
    </form>
)

}

export default PostFormCreator;
 