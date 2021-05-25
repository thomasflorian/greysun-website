import './ContentComponent.css'
import React from "react"
import { Switch, Route, useLocation } from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import ContactContent from "./Content/ContactContent"
import GreybandContent from "./Content/GreybandContent"
import StoryContent from "./Content/StoryContent"
import DashboardContent from "./Content/DashboardContent"

function ContentComponent(props) {
    const location = useLocation()
    return (
        <Switch location={location}>
            <Route exact path="/" children={<GreybandContent {...props}/>}></Route>
            <Route path="/story" children={<StoryContent {...props}/>}></Route>
            <Route path="/contact" children={<ContactContent {...props}/>}></Route>
            <PrivateRoute path="/dashboard" ><DashboardContent {...props}/></PrivateRoute>
        </Switch>
    )
}

export default ContentComponent