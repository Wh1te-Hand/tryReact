import React from 'react';
import  { useState } from 'react';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css'


function App() {
  const [string,setString]=useState('Put Your Number')
  

  return (
    <div className="App">
        <PostItem data={{id:1,title:'The lord of the rings', body:'Saruman'}}/>
    </div>
  );

}

export default App;
