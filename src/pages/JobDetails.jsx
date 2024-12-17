import { Link, useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";



const JobDetails = () => {
    const { _id, title, status, salaryRange, requirements, category, company, company_logo, description, hr_email, hr_name, jobType, location, } = useLoaderData()

    return (
        <div className="card bg-base-100 max-w-6xl mx-auto shadow-xl">
            <div className="flex gap-4 p-2 items-center">
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
            </div>
            <div className="card-body">

                <p className="text-lg font-semibold"> Company : {company}</p>
                <p className="font-semibold ">Job : <span className="opacity-80">{category}</span></p>
                <p className="font-semibold "><span className="opacity-80">{description}</span></p>
                <p className="font-semibold ">Salery : <span className="opacity-80">{salaryRange?.min}-{salaryRange?.max} BDT</span></p>
                <div>
                    <p className="font-semibold text-lg ">Recruiter details</p>
                    <hr  className="w-60 font-bold"/>
                <p className="font-semibold mt-3">{hr_name}</p>
                <p className="font-semibold my-1">{hr_email}</p>
                </div>
                
                <div className="card-actions justify-end">
                    <Link to={`/apply-job/${_id}`} className="py-2 px-6 rounded-lg border bg-cyan-600 hover:bg-cyan-700 font-semibold text-white ">Apply</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default JobDetails;