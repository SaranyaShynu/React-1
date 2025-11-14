import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component {
    constructor(props){
    super(props)
    console.log("Parent constructor")
    }

     componentDidMount() {
    console.log("Parent Component Did Mount")
   }
    render(){
        console.log("Parent Render")
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namasthe Food Court</h2>
            <User name={"Saranya (function)"}/>

            <UserClass name={"Saranya (class)"}/>
            <UserClass name={"Swetha"} />
        </div>
    )
}
}


/*
Parent Constructor
Parent Render

Saranya Constructor
Saranya Render

Swetha Constructor
Swetha Render

Saranya ComponentDidMount
Swetha ComponentDidMount

Parent ComponentDidMount


*/

export default About