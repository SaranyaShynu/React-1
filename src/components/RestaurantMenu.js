import React from "react"
import { useState , useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import ResCategory from "./ResCategory"
const RestaurantMenu = ()=>{

//const [resInfo, setResInfo]=useState(null)

const {resId} = useParams()
const resInfo=useRestaurantMenu(resId)

/*useEffect(()=>{
    fetchMenu()
},[])

const fetchMenu = async ()=>{
    const data = await fetch( MENU_API + resId)
    const json= await data.json()
    setResInfo(json.data)
}   */

if(resInfo==null)
     return   <Shimmer />
const {name, cuisines, costForTwoMessage}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || []
console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter (c=c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")   
console.log(categories)
return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            {categories.map((category)=><ResCategory />)}
        </div>
    )
}

export default RestaurantMenu