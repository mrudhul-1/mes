import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";




let routes=createBrowserRouter([
    {
        path:"/",
        element:<Login></Login>
    },{
        path:"/register",
        element:<Register></Register>
    }
])

export default routes