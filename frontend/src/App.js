import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import SignUp from './components/signup';

import './App.css';

function App() {
  return (
     <Router>

      <div className='App'>
        <Routes>
        <Route path="/sign-up" element={<SignUp/>}></Route>
         <Route>hi</Route>
        </Routes>
      </div>
    
     </Router>
  );
}

export default App;
