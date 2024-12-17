import { useState } from "react";
import useAuth from '../provider/useAuth'
import DatePicker from "react-datepicker";
// import { getYear } from "react-datepicker/dist/date_utils";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddJob = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const {user} = useAuth();
    const navigate = useNavigate()
    const submitJobInfo = (e) => {
        e.preventDefault();

        const form = new FormData(e.target)
        const initialData = Object.fromEntries(form.entries())
        // console.log(initialData)
        const { min, max, currency, ...newJob } = initialData;
        newJob.saleryRange = { min, max, currency }
        newJob.applicationDeadline = startDate;
        newJob.responsibilities = newJob.responsibilities.split('\n')
        newJob.requirements = newJob.requirements.split('\n')
        console.log(newJob)

        fetch(`${import.meta.env.VITE_API}/jobs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate('/my-posted-jobs')
                form.reset()
            })


        // const company = form.get('company')
        // const company_logo = form.get('company_logo')
        // const title = form.get('title')
        // const location = form.get('location')
        // const jobType = form.get('jobType')
        // const category = form.get('category')
        // // salery Range
        // const min = form.get('min')
        // const max = form.get('max')
        // const currency = form.get('currency')
        // const saleryRange = {
        //     min,
        //     max,
        //     currency
        // }

        // const description = form.get('description')
        // const responsibilities = [form.get('responsibilities')]
        // const hr_name = form.get('hr_name')
        // const hr_email = form.get('hr_email')


        // console.log(company, company_logo, title, location, jobType, category, saleryRange,startDate, description, responsibilities, hr_name, hr_email)

    }
    return (
        <div>
            <h2>Add job</h2>
            <div className="card bg-base-100 w-[80%] mx-auto p-8 shrink-0 shadow-2xl">
                <form onSubmit={submitJobInfo} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company name</span>
                        </label>
                        <input type="text" name="company" placeholder="Company name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company logo</span>
                        </label>
                        <input type="url" name="company_logo" placeholder="Logo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Job title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Your location" className="input input-bordered" required />

                    </div>
                    <div className="flex gap-5 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job type</span>
                            </label>
                            <select name="jobType" className="select select-ghost w-full ">
                                <option disabled selected>Pick a job type</option>
                                <option value={'Remote'}>Remote</option>
                                <option value={'Hybrid'}>Hybrid</option>
                                <option value={'On-Site'}>On-Site</option>
                                <option value={'Internship'}>Internship</option>
                            </select>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Job category</span>
                            </label>
                            <select name="category" className="select select-ghost w-full ">
                                <option disabled selected>Pick a job category</option>
                                <option value={'Engineering'}>Engineering</option>
                                <option value={'Marketing'}>Marketing</option>
                                <option value={'Finance'}>Finance</option>
                                <option value={'Teaching'}>Teaching</option>
                                <option value={'Management'}>Management</option>
                                <option value={'Data Science'}>Data Science</option>
                                <option value={'Design'}>Design</option>
                                <option value={'Development'}>Development</option>
                            </select>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salery range</span>
                            </label>
                            <input type="number" name="min" placeholder="Min" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            {/* <label className="label">
                            <span className="label-text">Location</span>
                        </label> */}
                            <input type="number" name="max" placeholder="Max" className="input input-bordered" required />

                        </div>
                        <div>
                            <select name="currency" className="select select-ghost w-full ">
                                <option disabled selected>Currency</option>
                                <option value={'BDT'}>BDT</option>
                                <option value={'USD'}>USD</option>
                                <option value={'SAR'}>SAR</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        {/* deedline */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Application deadline</span>
                        </label>
                        <input type="date" name="applicationDeadline" placeholder="Application deadline" className="input input-bordered" required />
                        {/* <DatePicker
                            className="border p-2 rounded-lg px-6"
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            isClearable={true}
                            required
                        /> */}

                    </div>
                    {/* active */}
                    <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text">Job statuse</span>
                            </label>
                            <select name="jobType" className="select select-ghost w-full " required>
                                <option value={'active'}>active</option>
                                <option value={'upcoming'}>upcoming</option>
                                
                            </select>

                        </div>
                    </div>
                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Requirements</span>
                        </label>
                        <textarea name="requirements" className="textarea textarea-bordered" placeholder="Put each requirement in a new line" required></textarea>

                    </div>
                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-bordered" placeholder="Description" required></textarea>

                    </div>
                    {/* responsibilities */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Responsibilities</span>
                        </label>
                        <textarea name="responsibilities" className="textarea textarea-bordered" placeholder="Put each responsibily in a new line" required></textarea>

                    </div>
                    {/* hr name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR name</span>
                        </label>
                        <input type="text" name="hr_name" placeholder="HR name" className="input input-bordered" required />
                    </div>
                    {/* hr email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name="hr_email" placeholder="HR email" className="input input-bordered" required />
                    </div>


                    {/* submit btn */}

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;