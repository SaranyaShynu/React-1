import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"

// React.createElement => Object => HTMLElement(render)
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object=> HTML Element(render)


const styleCard ={
    backgroundColor:"#f0"
}

const RestaurantCard = (props) =>{
    const {resData}=props
    const {cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    }=resData?.data
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100}</h4>   
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const resList=[{

},{

},{

}]

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                }

            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
          <Header />
          <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)