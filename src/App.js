import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import YourComponent from "./YourComponent";
import QuizNav from "./QuizNav";

function App() {
  return (
    <div className="App">
      <QuizNav/>
      <Router>
        <Routes>
          <Route path="/" element={<YourComponent/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
