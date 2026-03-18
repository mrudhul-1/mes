import { RouterProvider} from "react-router-dom"
import routes from "./routes/Routes"

import Login from "./pages/Login"
import Register from "./pages/Register"



const App = () => {
  return (
    <div>
    {/* <Login></Login> */}
    <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
