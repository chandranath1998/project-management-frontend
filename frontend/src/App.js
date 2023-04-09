import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import SignUp from './components/signup';
import Login from './components/login';

import './App.css';

function App() {
  return (
     <Router>

      <div className='App'>
        <Routes>
        <Route path="/sign-up" element={<SignUp/>}></Route>
         <Route path="/sign-in" element={<Login/>}></Route>
        </Routes>
      </div>
    
     </Router>
  );
}

export default App;
