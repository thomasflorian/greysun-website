import React from "react"
import {Switch, Route} from "react-router-dom"

function Content(props) {
    return (
        <Switch>
            <Route exact path="/"><h1>GreyBand</h1></Route>
            <Route path="/story"><h1>Our Story</h1></Route>
            <Route path="/contact"><h1>Contact</h1></Route>
        </Switch>
    )
}

export default Content