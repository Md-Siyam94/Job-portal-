import { useEffect, useState } from "react";
import useAuth from "../provider/useAuth";
import { FaMapMarkerAlt } from "react-icons/fa";

const MyApplication = () => {
    const { user } = useAuth()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
    
    const handleDelete = (id)=>{
        console.log(id) 
    }
    return (
        <div>
            my application {jobs.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    No.
                                    {/* <input type="checkbox" className="checkbox" /> */}
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job details</th>
                            <th>Feedback</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, index) => <tr>
                                <th>
                                    <label>
                                        {index + 1}
                                        {/* <input type="checkbox" className="checkbox" /> */}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job?.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job?.company}</div>
                                            <div className="text-sm opacity-50 flex items-center gap-1"><FaMapMarkerAlt />{job?.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="font-semibold">{job?.title}</span>
                                    <br />
                                    <div className="flex gap-2 my-2 flex-wrap">
                                        {
                                            job?.requirements.map((requirement, index) => <div key={index}>

                                                <span className="badge badge-ghost badge-sm">{requirement}</span>
                                            </div>
                                            )
                                        }
                                    </div>

                                </td>
                               <th>
                               <button className= "btn btn-xs btn-ghost text-green-600">Accept</button>
                               </th>
                                <th>
                                    <button onClick={()=>handleDelete(job?.job_id)} className="btn btn-ghost text-red-600 btn-xs">Reject</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyApplication;