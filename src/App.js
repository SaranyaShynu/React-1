import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"

// React.createElement => Object => HTMLElement(render)
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object=> HTML Element(render)


const styleCard ={
    backgroundColor:"#f0"
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