import React from "react"
import { Switch, Route, useLocation, Redirect } from "react-router-dom"

import PrivateRoute from './PrivateRoute'
import ContactContent from "./Content/ContactContent"
import GreybandContent from "./Content/GreybandContent"
import StoryContent from "./Content/StoryContent"
import DashboardContent from "./Content/DashboardContent"
import DevContent from "./Content/DevContent"
import SignUp from "./Content/SignUp"
import SignIn from "./Content/SignIn"
import ResetPassword from "./Content/ResetPassword"

function ContentComponent(props) {
    const location = useLocation()
    return (
        <Switch location={location}>
            <Route exact path="/" children={<GreybandContent {...props} />}></Route>
            <Route exact path="/story" children={<StoryContent {...props} />}></Route>
            <Route exact path="/contact" children={<ContactContent {...props} />}></Route>
            <Route exact path="/store" component={() => {window.location.href = 'https://greysuntech.company.site'; return <Redirect to="/" />}}></Route>
            <Route exact path="/signup" children={<SignUp {...props} />}></Route>
            <Route exact path="/signin" children={<SignIn {...props} />}></Route>
            <Route exact path="/resetpassword" children={<ResetPassword {...props} />}></Route>
            <PrivateRoute exact path="/dev" children={<DevContent {...props} />}></PrivateRoute>
            <PrivateRoute exact path="/dashboard" ><DashboardContent {...props} /></PrivateRoute>
            <Route path="/"><Redirect to="/" /></Route>
        </Switch>
    )
}

export default ContentComponent