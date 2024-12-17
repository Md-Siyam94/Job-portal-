import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import JobDetails from "../pages/JobDetails";
import PrivetRoute from "../provider/PrivetRoute";
import ApplyJob from "../pages/ApplyJob";
import MyApplication from "../pages/MyApplication";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";
import MyAddedJobs from "../pages/MyAddedJobs";
import ViewApplication from "../pages/ViewApplication";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: '/jobs/:id',
        element: <PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API}/jobs/${params.id}`)
      },
      {
        path: '/apply-job/:id',
        element: <PrivetRoute><ApplyJob></ApplyJob></PrivetRoute>
      },
      {
        path: "/all-jobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: '/my-posted-jobs',
        element: <PrivetRoute><MyAddedJobs></MyAddedJobs></PrivetRoute>
      },
      {
        path: '/add-job',
        element: <PrivetRoute><AddJob></AddJob></PrivetRoute>
      },
      {
        path: '/my-application',
        element: <PrivetRoute><MyApplication></MyApplication></PrivetRoute>
      },
      {
        path: '/viewApplication/:job_id',
        element: <PrivetRoute><ViewApplication></ViewApplication></PrivetRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API}/job-application/jobs/${params.job_id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

export default router;