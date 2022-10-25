import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Premium from "../../components/Premium/Premium";
import Registration from "../../components/Registration/Registration";
import Main from "../../Layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            loader: () =>
               fetch("https://tenth-assignment-server.vercel.app/courses"),
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
         {
            path: "/premium/:id",
            element: <PrivateRoutes><Premium></Premium></PrivateRoutes>,
            loader: async ({ params }) => {
               return fetch(
                  `https://tenth-assignment-server.vercel.app/courses/${params.id}`
               );
            },
         },
         {
            path: "/course/:id",
            element: <CourseDetails></CourseDetails>,
            loader: async ({ params }) => {
               return fetch(
                  `https://tenth-assignment-server.vercel.app/courses/${params.id}`
               );
            },
         },
      ],
   },
]);

export default router;
