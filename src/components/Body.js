import RestaurantCard from "./RestaurantCard"
import {useEffect, useState} from "react"
import resList from "../utils/mockData"

const Body = () =>{

const [listOfRestaurants,setListOfRestaurants] = useState(resList) //local state variable - super powerful variable
useEffect(()=>{console.log("useEffect called")
    fetchData()
},
    [])
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=D")
        const json=await data.json
        console.log(json)
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    if(listOfRestaurants.length==0){
        return<h1>Loading...</h1>
    }
//let listOfRestaurants=[]  //normal js variable

    return (
        <div className="body">
            <div className="filter">
            <button className="filter-btn" onClick={()=>{setListOfRestaurants()
               const filteredList=listOfRestaurants.filter((res)=>res.data.avgRating>4)
               setListOfRestaurants(filteredList)
            }}
              >
            Top Rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                }

            </div>
        </div>
    )
}

export default Body