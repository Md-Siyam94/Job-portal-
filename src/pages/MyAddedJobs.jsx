import { useEffect, useState } from "react";
import useAuth from "../provider/useAuth";
import { Link } from "react-router-dom";
// import { format } from 'date-fns';

const MyAddedJobs = () => {
    const [jobs, setJobs] = useState([])
    const { user } = useAuth()
    console.log(jobs)
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])
    return (
        <div>
            my added jobs{jobs.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Appllication details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        jobs.map((job, index)=> <tr>
                            <th>{index + 1}</th>
                            <td>{job?.company}</td>
                            <td>{job?.applicationDeadline}</td>
                            <td>
                                <Link to={`/viewApplication/${job._id}`} ><button>View application</button></Link>
                            </td>
                        </tr>)
                       }
                       
                    </tbody>
                </table>
            </div>


        </div >
    );
};

export default MyAddedJobs;