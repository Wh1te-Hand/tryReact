import React, { useMemo, useRef,useEffect } from 'react';
import  { useState } from 'react';
import PostService from './API/PostService';
import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostFormCreator from './components/PostFormCreator';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import ButtonInput from './components/UI/buttons/ButtonInput';
import MyInput from './components/UI/inputs/MyInput';
import Loader from './components/UI/loader/Loader';
import MyModal from './components/UI/modalWindow/MyModal';
import MySelect from './components/UI/select/MySelect';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import './styles/App.css'
import { getPageCount } from './utils/pageUtils/pages';


function App() {
  const [posts,setPosts]=useState([
    {id:1,title:'The lord of the rings', body:'Saruman'},
    {id:2,title:'The lord of the rings', body:'Saruman'},
    {id:3,title:'The lord of the rings', body:'dura'},
    {id:4,title:'The lord of the rings', body:'abuda'}
  ])

  // const bodyRef=useRef();
  const [filter,setFilter]=useState({sort:'',query:''});
  const [modal,setModal]=useState(false);
  const [totalPages,setTotalPages]=useState(0);
  const [limit,setLimit]=useState(10);
  const [page,setPage]=useState(1);
  const sortedAnsSearchedPosts=usePosts(posts,filter.sort,filter.query);
    // Добавить пакет аксиос и транзитион групп плюс ссылку на ресурс

  const [fetchPosts,isLoadingPostPage,postError]=useFetching(async ()=>{
    const response=await PostService.getPostsFromJSON(limit,page);
    setPosts(response.data);    
    const totalCount=response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount,limit))
  })

  useEffect(() => {
    fetchPosts();
  }, []);

  function removePost(post){
  setPosts(posts.filter(p=>p.id!==post.id))
  }
  
  function createPost(newPost){
    setPosts([...posts,newPost])
    setModal(false);
  }



  return (
    <div className="App">
    <ButtonInput
    style={{marginTop:30}}
    onClick={()=>setModal(true)}  
    >
      Create post
    </ButtonInput>
    <MyModal visible={modal} setVisible={setModal} >
        <PostFormCreator  create={createPost}/>
    </MyModal>

   <PostFilter
     filter={filter}
     setFilter={setFilter}
   /> 
   
    {postError && <h1>Error {postError}</h1>}

    {isLoadingPostPage
    ?
    <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}> <Loader/></div>
    :
    <PostList remove={removePost} posts={sortedAnsSearchedPosts} title='List  of posts'/>
    }
       
    </div>
  );

}

export default App;
