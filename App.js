import React from "react"
import ReactDOM from "react-dom/client"

// React.createElement => Object => HTMLElement(render)
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object=> HTML Element(render)
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7eaTHYrwbIDLDcu6q9UGxpa6vZ8aRoMzfQ&s" />
            </div>
            <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
             </ul>
            </div>
        </div>
    )
}

const styleCard ={
    backgroundColor:"#f0"
}

const RestaurantCard = (props) =>{
    const {resData}=props
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData.data.cloudinaryImageId}/>
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(",")}</h4>
            <h4>{resData.data.avgRating} stars</h4>
            <h4>{resData.data.costForTwo/100}</h4>   
            <h4>{resData.data.deliveryTime} minutes</h4>
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
                <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/> 
                <RestaurantCard resData={resList[2]}/> 
                <RestaurantCard resData={resList[3]}/> 
                <RestaurantCard resData={resList[4]}/> 
                <RestaurantCard resData={resList[5]}/> 
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/>
                <RestaurantCard resData={resList[8]}/> 
                <RestaurantCard resData={resList[9]}/> 
                <RestaurantCard resData={resList[10]}/> 
                <RestaurantCard resData={resList[11]}/> 
                <RestaurantCard resData={resList[12]}/> 
                <RestaurantCard resData={resList[13]}/>
                <RestaurantCard resData={resList[14]}/>
                <RestaurantCard resData={resList[15]}/> 
                <RestaurantCard resData={resList[16]}/> 
                <RestaurantCard resData={resList[17]}/> 
                <RestaurantCard resData={resList[18]}/> 
                <RestaurantCard resData={resList[19]}/> 
                <RestaurantCard resData={resList[20]}/>
                <RestaurantCard resData={resList[21]}/>
                <RestaurantCard resData={resList[22]}/> 
                <RestaurantCard resData={resList[23]}/> 
                <RestaurantCard resData={resList[24]}/> 
                <RestaurantCard resData={resList[25]}/> 
                <RestaurantCard resData={resList[26]}/> 
                <RestaurantCard resData={resList[27]}/>
                <RestaurantCard resData={resList[28]}/> 
                <RestaurantCard resData={resList[29]}/>

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