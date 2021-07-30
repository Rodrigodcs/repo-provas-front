//import {GlobalStyle} from "./GlobalStyle"
import {GlobalStyle} from "./GlobalStyle"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Landing from "./components/Landing.js"
import Create from "./components/Create.js"
import Options from "./components/Options.js"
import Teachers from "./components/Teachers.js"
import Courses from "./components/Courses.js"

export default function App(){


    return (
        <Router>
            <GlobalStyle/>
            <Switch>
                <Route path="/" exact>
                    <Landing/>
                </Route>
                <Route path="/add-test" exact>
                    <Create/>
                </Route>
                <Route path="/options" exact>
                    <Options/>
                </Route>
                <Route path="/teachers" exact>
                    <Teachers/>
                </Route>
                <Route path="/courses" exact>
                    <Courses/>
                </Route>
            </Switch>
        </Router>
    )
}