
import { useState } from "react"

const SearchBar = (props) => {

    const [jobCriteria,setJobCriteria]=useState({
        title:"",
        location:"",
        experience:"",
        type:""
    })

    const handleChange=(e)=>{
        setJobCriteria((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const search=async()=>{
        await props.fetchJobsCustom(jobCriteria);
    }




    return ( 
        <div className="search-bar">
            <select onChange={handleChange} name="title" value={jobCriteria.title} >
                <option value="" disabled hidden selected>Job Role</option>
                <option value="Frontend Developer" >Frontend Developer</option>
                <option value="Backend Developer" >Backend Developer</option>
                <option value="Android Developer" >Android Developer</option>
                <option value="iOS Developer" >iOS Developer</option>
            </select>
            <select onChange={handleChange} name="type" value={jobCriteria.type}>
                <option value="" disabled hidden selected>Job Type</option>
                <option value="Full Time" >Full Time</option>
                <option value="Part Time" >Part Time</option>
            </select>
            <select onChange={handleChange} name="location" value={jobCriteria.location}>
                <option value="" disabled hidden selected>Location</option>
                <option value="Remote" >Remote</option>
                <option value="In-office" >In-office</option>
                <option value="Hybrid" >Hybrid</option>
            </select>
            <select onChange={handleChange} name="experience" value={jobCriteria.experience}>
                <option value="" disabled hidden selected>Experience</option>
                <option value="Fresher" >Freshers</option>
                <option value="Junior Level" >Junior Level</option>
                <option value="Senior Level" >Senior Level</option>
            </select>
            <button onClick={search}>Search</button>

        </div>
     );
}
 
export default SearchBar;