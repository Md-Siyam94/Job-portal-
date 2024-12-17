import axios from "axios";
import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";
import { Link } from "react-router-dom";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API}/jobs`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
      

    },[])
    // console.log(jobs)
    return (
        <div className="w-[95%] mx-auto">
            <h2>Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {
                    jobs.slice(0,6).map(job=> <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
            <div className="my-10  flex justify-center">
                <Link to={'/all-jobs'} ><button className="btn px-5 bg-orange-950 text-white">More Jobs</button></Link>
            </div>
        </div>
    );
};

export default HotJobs;