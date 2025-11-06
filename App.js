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

const RestaurantCard = () =>{
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img
            className="res-logo"
            alt="res-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsx2EsbkcRlmTb5_v5AglNRzcvzOZ8EvxaYA&s"/>
            <h3>KFC</h3>
            <h4>Berger with French fries, Hot Wings, Chicken Rice bowl, Friendship Bucket</h4>
        </div>
    )

}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
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