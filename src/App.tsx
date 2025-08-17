

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "./routers/MainLayout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/admin/AdminPage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/user/SignInPage";
import SignUpPage from "./pages/user/SignUpPage";




const router = createBrowserRouter([
  /*Trang cua User */ 
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<HomePage/>,
      },

      {
        path:"users",
        element:<UserPage/>, 
      },

      {
        path:"admin",
        element:<AdminPage />, 
      },

      {
        path:"about",
        element:<AboutPage/>
      },

    ]
  },


/*trang Dang nhap (Sign in) cua user*/
    {
        path:"/signin",
        element:<SignInPage/>
      },

      /*Trang Dang ky (Sign Up) cua user*/ 
     {
        path:"/signup",
        element:<SignUpPage/>
      },

]);



const App = () => {
  return (
    <>
       <RouterProvider router={router} />,
    </>
    
  )
}

export default App
