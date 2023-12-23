import SearchBar from "../SearchBar";
import JobCard from "../JobCard";
import { useState, useEffect } from "react";

import { collection, orderBy, query, where, getDocs } from "firebase/firestore";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { db } from "../../firebase.config";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  //for returning to the no filtred page
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      console.log(job.id, " => ", job.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  //custome fetch
  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      where("location", "==", jobCriteria.location),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  console.log(jobs);

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>

      <div className="index">
        <div className="index-logo">Online Job Portal</div>
      

      <div className="index-2">
        <div className="index-left">
          <a href="/Home">Home</a>
          <a href="Applied Job">Applied Job</a>
        </div>
        <div className="index-right">
          <a href="/Notification">Notification</a>
          <a href="/Login">Login</a>
          <a href="/Signup">SignUp</a>
        </div>
      </div>
      <div className="header-index">
        <h1>Your ideal job waits, start the search</h1>
        <p>Get latest job openings that best suited you!</p>
      </div>
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && (
        <button className="App-btn" onClick={fetchJobs}>
          <p>ClearFilters</p>
        </button>
      )}

      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
      </div>
    </>
  );
};

export default Home;
