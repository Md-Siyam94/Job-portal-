import { useLoaderData } from "react-router-dom";


const ViewApplication = () => {
    const applications = useLoaderData();

    return (
        <div>
            see application{applications.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        applications.map((app, index)=>  <tr key={app._id}>
                            <th>{index + 1}</th>
                            <td>{app?.applicant_email}</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;