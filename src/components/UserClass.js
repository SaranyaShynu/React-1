import React from "react"

class UserClass extends React.Component {
   constructor(props) {
    super(props)

    this.state={
        userInfo:{
            name:"Dummy",
            location:"Default"
        },
    }
    console.log("Child Constructor")
   }
  async componentDidMount() {
    console.log("Child Component Did Mount")
    // API Call
    const data=await fetch(" https://api.github.com/users")
    const json = await data.json()

    this.setState({
        userInfo:json
    })
    console.log(json)
   }

   componentDidUpdate() {
    console.log("component Did Update")
   }

   componentWillUnmount (){
    console.log("Component Will Unmount")
   }

   render() {
    console.log("Child Constructor")
    return (
         <div className="user-card">
            <h1>Count:{this.state.count}</h1>
            <button
            onClick={()=>{
                //Never update state variables directly in class
                this.setState({
                    count:this.state.count + 1
                })
            }}
            >Count  Increses</button>
        <h2>Name:{this.state.userInfo.name}</h2>
        <h3>Location:Kannur</h3>
        <h4>Contact:@saranya.com</h4>
        </div>
    )
   }
}

export default UserClass

/*
MOUNTING
  Constructor (dummy)
  Render (dummy)
    <HTML Dummy>
Component Did Mount
    <API Call>
    <this.setState> -> State variable is updated

UPDATE
   render(API data)
   <HTML (new API data)
   component Did Update
*/