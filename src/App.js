import React, { useMemo, useRef } from 'react';
import  { useState } from 'react';
import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
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
    {id:3,title:'The lord of the rings', body:'dura'},
    {id:4,title:'The lord of the rings', body:'abuda'}
  ])

  // const bodyRef=useRef();
  const [filter,setFilter]=useState({sort:'',query:''})

  function removePost(post){
  setPosts(posts.filter(p=>p.id!==post.id))
  }
  
  function createPost(newPost){
    setPosts([...posts,newPost])
  }

const sortedPosts=useMemo(()=>{
  if (filter.sort){
    return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]));
  }
  return posts;
}, [filter.sort,posts]);

const sortAndSearchPosts=useMemo(()=>{
return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query))
},[filter.query,sortedPosts])

  return (
    <div className="App">

    <PostFormCreator create={createPost}/>

    <hr style={{margin:'15px 0px'}}></hr>

   <PostFilter
     filter={filter}
     setFilter={setFilter}
   /> 
   
    <PostList remove={removePost} posts={sortAndSearchPosts} title='List  of posts'/>
       
    </div>
  );

}

export default App;
