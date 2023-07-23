import React, { useMemo, useRef } from 'react';
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
    {id:3,title:'The lord of the rings', body:'dura'},
    {id:4,title:'The lord of the rings', body:'abuda'}
  ])

  // const bodyRef=useRef();
  const [selectedSort,setSelectedSort]=useState('')
  const [searchQuery,setSearchQuery]=useState('')

  function removePost(post){
  setPosts(posts.filter(p=>p.id!==post.id))
  }
  
  function createPost(newPost){
    setPosts([...posts,newPost])
  }

function sortPosts(sort){
  setSelectedSort(sort);
}

const sortedPosts=useMemo(()=>{
  if (selectedSort){
   // console.log([...posts].sort((a,b)=>{a[selectedSort].localeCompare(b[selectedSort])}))
    return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]));
  }
  return posts;
}, [selectedSort,posts]);

const sortAndSearchPosts=useMemo(()=>{
return sortedPosts.filter(post=>post.title.toLowerCase().includes(searchQuery))
},[searchQuery,sortedPosts])

  return (
    <div className="App">

    <PostFormCreator create={createPost}/>

    <hr style={{margin:'15px 0px'}}></hr>

    <MyInput
    value={searchQuery}
    onChange={e=>setSearchQuery(e.target.value)}
    placeholder="Search"
    />

    <MySelect
      value={selectedSort}
      onChange={sortPosts}
      defaultValue="Sort posts"
      options={[
        {value:"title",name:"By name"},
        {value:"body",name:"By description"}
      ]}
    />

    {sortAndSearchPosts.length!==0
    ? 
      <PostList remove={removePost} posts={sortAndSearchPosts} title='List  of posts'/>
    :
      <h1><div style={{textAlign:'center'}}>Empty</div></h1>
    }  
    
    </div>
  );

}

export default App;
