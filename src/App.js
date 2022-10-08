
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Newsbox from './components/Newsbox';
import{

  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

const App = ()=> {


const [progress, setProgress] = useState();

    document.body.style.backgroundColor = 'white';
    return (
      <>

      
      <Router>
      <Navbar/>
      <LoadingBar height={3} color='white'  progress={progress}></LoadingBar>
      <div className="text-center mb-5" style={{backgroundColor: '#c4c3bf'}}>
      <h2>NewsViews - Get The Daily News Updates Quicker</h2>
      </div>
      <div className='container'>
        
        

          <Routes>

          <Route exact path='/' element={<Newsbox setProgress = {setProgress} key="general" catagory = 'general'/>}></Route>
          <Route exact path='/business' element={<Newsbox setProgress = {setProgress} key="business" catagory = 'business'/>}></Route>
          <Route exact path='/sports' element={<Newsbox setProgress = {setProgress} key="sports" catagory = 'sports'/>}></Route>
          <Route exact path='/entertainment' element={<Newsbox setProgress = {setProgress} key="entertainment" catagory = 'entertainment'/>}></Route>
          <Route exact path='/health' element={<Newsbox setProgress = {setProgress} key="health" catagory = 'health'/>}></Route>
          <Route exact path='/science' element={<Newsbox setProgress = {setProgress} key="science" catagory = 'science'/>}></Route>
          <Route exact path='/technology' element={<Newsbox setProgress = {setProgress} key="technology" catagory = 'technology'/>}></Route>
          
          </Routes>

      </div>
        </Router>
        
      </>);
  
}

export default App;
