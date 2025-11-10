import RestaurantCard from "./RestaurantCard"
import {useState} from "react"
import resList from "../utils/mockData"

const Body = () =>{

const [listOfRestaurants,setListOfRestaurants] = useState(resList) //local state variable - super powerful variable

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