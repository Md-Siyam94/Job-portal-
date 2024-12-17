import React, { useEffect, useState } from 'react';
import HotJobCard from '../components/HotJobCard';

const AllJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API}/jobs`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[])
    return (
        <div>
           <h2>All jobs</h2> 
           <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {
                    jobs.map(job=> <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;