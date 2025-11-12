
import RestaurantCard from "./RestaurantCard"
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer"

const Body = () =>{

const [listOfRestaurants,setListOfRestaurants] = useState([]) //local state variable - super powerful variable
const [filteredRestaurant,setFilteredRestaurant]=useState([])

const [searchText,setSearchText]=useState("")
//Whenever state variables update, react triggers a reconciliation cycle(rerenders the component)
console.log('Body Rendered')

useEffect(()=>{
    fetchData()
},
    [])
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=D")
        const json=await data.json
        console.log(json)
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    return listOfRestaurants.length==0 ? (    //conditinal rendering
        <Shimmer />
    ) : (
//let listOfRestaurants=[]  //normal js variable
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={()=>{
                        //filter the restaurant card and update the UI
                        //searchText
                        console.log(searchText)
                        const filteredRestaurant=listOfRestaurants.filter(
                            (res)=>res.data.name.includes==searchText)
                     
                     setListOfRestaurants(filteredRestaurant)
                     }} > Search</button>
                </div>
            <button className="filter-btn" onClick={()=>{setListOfRestaurants()
               const filteredList=listOfRestaurants.filter(
                (res)=>res.data.avgRating>4)
               setListOfRestaurants(filteredList)
            }}
              >
            Top Rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                }

            </div>
        </div>
    )
}

export default Body