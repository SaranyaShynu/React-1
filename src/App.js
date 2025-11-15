import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
//import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"
// chunking
//code splitting
//dynamic bundling
// React.createElement => Object => HTMLElement(render)
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object=> HTML Element(render)


const styleCard ={
    backgroundColor:"#f0"
}

const AppLayout = () =>{
   // console.log(<Body />)
   // React.createElement("h1",{}) => React Element
    return (
        <div className="app">
          <Header />
          <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
           {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    },
    {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />
    }
        ],
      //  errorElement:<Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)