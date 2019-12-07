import React, { Component } from 'react'

import Courses from './containers/Courses/Courses'
import Users from './containers/Users/Users'
import Course from './containers/Course/Course'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="nav">
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Route
            path="/"
            exact
            render={() => (
              <ol style={{ textAlign: 'left' }}>
                <li style={{ textDecoration: 'line-through' }}>
                  Add Routes to load "Users" and "Courses" on different pages
                  (by entering a URL, without Links)
                </li>
                <li style={{ textDecoration: 'line-through' }}>
                  Add a simple navigation with two links => One leading to
                  "Users", one leading to "Courses"
                </li>
                <li style={{ textDecoration: 'line-through' }}>
                  Make the courses in "Courses" clickable by adding a link and
                  load the "Course" component in the place of "Courses" (without
                  passing any data for now)
                </li>
                <li style={{ textDecoration: 'line-through' }}>
                  Pass the course ID to the "Course" page and output it there
                </li>
                <li style={{ textDecoration: 'line-through' }}>
                  Pass the course title to the "Course" page - pass it as a
                  param or score bonus points by passing it as query params (you
                  need to manually parse them though!)
                </li>
                <li style={{ textDecoration: 'line-through' }}>
                  Load the "Course" component as a nested component of "Courses"
                </li>
                <li style={{ textDecoration: 'line-through' }}>
                  Add a 404 error page and render it for any unknown routes
                </li>
                <li style={{ textDecoration: 'line-through' }}>
                  Redirect requests to /all-courses to /courses (=> Your
                  "Courses" page)
                </li>
              </ol>
            )}
          />
          <Redirect from="/all-courses" to="/courses" />
          <Route render={() => <h1>404 Page not found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
