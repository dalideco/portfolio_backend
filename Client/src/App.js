import React,{useState} from 'react';
import {Helmet} from 'react-helmet'
import './App.scss';
import Header from './Header';
import Main from './Main'


function App() {

  const [currentPage, setCurrentPage]= useState(0);
  return (
    <div className="my-body">
      <Helmet>
        <title>My portfolio</title>
      </Helmet>
      <div className="App">
        <Header change={setCurrentPage}/>
        <Main page={currentPage}/>
      </div>
    </div>
  );
}

export default App;
