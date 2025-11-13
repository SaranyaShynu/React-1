import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Componennt {
    render(){
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namasthe Food Court</h2>
            <User name={"Saranya (function)"}/>

            <UserClass name={"Saranya (class)"}/>
        </div>
    )
}
}

export default About