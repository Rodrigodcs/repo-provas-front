//import {GlobalStyle} from "./GlobalStyle"
import {GlobalStyle} from "./GlobalStyle"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Landing from "./components/Landing.js"
import Create from "./components/Create.js"
import Options from "./components/Options.js"
import TeacherTests from "./components/TeacherTests.js"
import CourseTests from "./components/CourseTests.js"
import Header from "./components/Header.js"

export default function App(){


    return (
        <Router>
            <GlobalStyle/>
            <Switch>
                <Route path="/" exact>
                    <Header/>
                    <Landing/>
                </Route>
                <Route path="/add-test" exact>
                    <Header/>
                    <Create/>
                </Route>
                <Route path="/options/:majorId" exact>
                    <Header/>
                    <Options/>
                </Route>
                <Route path="/options/teachers/:teacherId/tests" exact>
                    <Header/>
                    <TeacherTests/>
                </Route>
                <Route path="/options/courses/:courseId/tests" exact>
                    <Header/>
                    <CourseTests/>
                </Route>
            </Switch>
        </Router>
    )
}