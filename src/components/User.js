import { useEffect, useState } from "react"
const User =(props)=>{
    const [count]=useState(0)

useEffect(()=>{
    //API Calls
}, [])

async function getUserInfo() {
    
}

    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
        <h2>Name:{props.name}</h2>
        <h3>Location:Kannur</h3>
        <h4>Contact:@saranya.com</h4>
        </div>
    )
}

export default User