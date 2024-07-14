import React from 'react'
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import Course from './courses/Courses';
import Signup from './components/Signup';
const App = () => {
  return (
    <>

 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/course" element={<Course/>}/>
  <Route path='/about' />
  <Route path='/signup' element={<Signup/>}/>
 </Routes>
    {/* <Practice/> */}
    </>
  )
}

export default App;