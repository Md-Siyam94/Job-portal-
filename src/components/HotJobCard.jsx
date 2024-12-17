import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const HotJobCard = ({ job }) => {
    console.log(job)
    const { _id, title, status, salaryRange, requirements, category, company, company_logo, description, hr_email, hr_name, jobType, location, } = job || {}
    return (
        <div className="card bg-base-100  shadow-xl">
            <div className="flex items-center p-2 gap-3">
                <figure>
                    <img
                        className='w-12 object-cover'
                        src={company_logo}
                        alt="company logo" />
                </figure>
                <div>
                    <h2 className="text-xl font-semibold">{company}</h2>
                    <p className="flex gap-2 items-center opacity-70 "><FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <div className=" p-3">
                <h2 className="card-title">{title}</h2>
                <p className="opacity-70 my-2">{description.substring(0, 60)}...<span className="font-semibold"><Link to={`jobs/${_id}`}>See more</Link></span></p>
                <div className="flex gap-2 my-2 flex-wrap">
                    {
                        requirements.map((requirement, index) => <div key={index}>

                            <p className="border text-sm px-3 hover:text-blue-300 rounded-md ">{requirement}</p>
                        </div>
                        )
                    }
                </div>
                <h3 className="font-semibold mt-3">Salery : {salaryRange?.min}-{salaryRange?.max} {salaryRange?.currency}</h3>
                <div className="card-actions justify-end ">
                    <Link to={`/jobs/${_id}`}>
                        <button className="py-2 px-5 rounded-lg border shadow-sm bg-base-100  font-semibold mt-4">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;