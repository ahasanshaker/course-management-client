import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import CourseDetails from "../Pages/CourseDetail";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoute from "../Components/ProtectedRoute";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Dashboard";
// import Home from "../pages/Home/Home";
// import Courses from "../pages/Courses/Courses";
// import CourseDetails from "../pages/CourseDetails/CourseDetails";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import NotFound from "../pages/NotFound";
// import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/:id", element: <CourseDetails /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
