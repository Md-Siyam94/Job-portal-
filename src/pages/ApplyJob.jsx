import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../provider/useAuth";
import Swal from "sweetalert2";


const ApplyJob = () => {

    const {user} = useAuth()
    const { id } = useParams();
    // console.log(id, user)
    const navigate = useNavigate()

    const submiteJobApplication = e=>{
        e.preventDefault();

        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;

        console.log(linkedIn, gitHub, resume)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            gitHub,
            resume
        }

        fetch(`${import.meta.env.VITE_API}/job-applications`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your apply has been done",
                    showConfirmButton: false,
                    timer: 1000
                  });
            }
            navigate('/my-application')
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">

                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Appling at</h1>
                         {/* <div className="flex gap-4 p-2 items-center">
                                        <figure>
                                            <img
                                                className="w-16"
                                                src={company_logo}
                                                alt="Company logo" />
                                        </figure>
                                        <div>
                                            <h2 className="card-title">
                                                {title}
                                                <div className={status === 'active' ? "badge badge-success text-white": "badge badge-error text-white"}>{status}</div>
                                                <div className="badge bg-yellow-500 text-white" >{jobType}</div>
                        
                                            </h2>
                                            <p className="flex items-center gap-2 opacity-70 font-semibold my-1"><FaMapMarkerAlt />{location}</p>
                                            <div className="flex gap-1 flex-wrap">
                                            {
                                                requirements.map((requirement, index) => <div key={index}>
                        
                                                    <p className="border text-sm px-2 hover:text-blue-300 rounded-md ">{requirement}</p>
                                                </div>
                                                )
                                            }
                                        </div>
                                        </div>
                                    </div> */}
                        
                        <p className="py-6">
                           To apply this job.You have to give your LinkedIn,GitHub and Resume url.
                        </p>
                    </div>
                    <form onSubmit={submiteJobApplication} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn ID</span>
                            </label>
                            <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">GitHub ID</span>
                            </label>
                            <input type="url" name="gitHub" placeholder="GitHub URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <input type="url" name="resume"  placeholder="Resume URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;