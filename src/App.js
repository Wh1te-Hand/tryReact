import React, { useRef } from 'react';
import  { useState } from 'react';
import Counter from './components/Counter';
import PostFormCreator from './components/PostFormCreator';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import ButtonInput from './components/UI/buttons/ButtonInput';
import MyInput from './components/UI/inputs/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css'


function App() {
  const [posts,setPosts]=useState([
    {id:1,title:'The lord of the rings', body:'Saruman'},
    {id:2,title:'The lord of the rings', body:'Saruman'},
    {id:3,title:'The lord of the rings', body:'Saruman'},
    {id:4,title:'The lord of the rings', body:'Saruman'}
  ])

  function removePost(post){
  setPosts(posts.filter((p)=>p.id!==post.id))
  }

// const bodyRef=useRef();
  
function createPost(newPost){
  setPosts([...posts,newPost])
}

  return (
    <div className="App">

    <PostFormCreator create={createPost}/>

    <hr style={{margin:'15px 0px'}}></hr>

    <MySelect
      defaultValue="Sort posts"
      options={[
        {value:"title",name:"By name"},
        {value:"body",name:"By description"}
      ]}
    />

    {posts.length!==0
    ? 
      <PostList remove={removePost} posts={posts} title='List  of posts'/>
    :
      <h1><div style={{textAlign:'center'}}>Empty</div></h1>
    }  
    
    </div>
  );

}

export default App;
