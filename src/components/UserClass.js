import React from "react"

class UserClass extends React.Component {
   constructor(props) {
    super(props)

    this.state={
        count:0
    }
   // console.log(props)
   }
   render() {
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
        <h2>Name:{this.props.name}</h2>
        <h3>Location:Kannur</h3>
        <h4>Contact:@saranya.com</h4>
        </div>
    )
   }
}

export default UserClass