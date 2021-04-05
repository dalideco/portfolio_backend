import React,{useState} from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main'

function App() {

  const [currentPage, setCurrentPage]= useState(0);
  return (
    <div className="my-body">
      <div className="App">
        <Header change={setCurrentPage}/>
        <Main page={currentPage}/>
      </div>
    </div>
  );
}

export default App;
