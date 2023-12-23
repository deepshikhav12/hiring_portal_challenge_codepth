
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import Home from "./components/Home";
import ErrorPage from "./components/Error";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notify";
// import jobData from "./JobDummyData"
import { useEffect, useState } from "react";
import { collection, orderBy, query, where, getDocs } from "firebase/firestore";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import { db } from "./firebase.config";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/Home" element={<Home  />} />
          <Route exact path="/Notification" element={<Notification  />} />
          <Route exact path="/*" element={<ErrorPage  />} />
        </Routes>
     
    </div>
  );
}

export default App;
