import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from '../../components/Courses/Courses';
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/home",
            element: <Home></Home>,
         },
         {
            path: "/courses",
            element: <Courses></Courses>,
            loader:  () => fetch('https://tenth-assignment-server.vercel.app/courses')
         },
         {
            path: "/blog",
            element: <Blog></Blog>,
         },
         {
            path: "/registration",
            element: <Registration></Registration>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
      ],
   },
]);

export default router;
