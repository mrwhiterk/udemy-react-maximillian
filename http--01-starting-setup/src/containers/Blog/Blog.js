import React, { Component } from 'react'
// import axios from 'axios'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import './Blog.css'
import Posts from './Posts/Posts'
import NewPosts from './NewPost/NewPost'
// import FullPost from './FullPost/FullPost'

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline'
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    // pathname: this.props.match.url + "/new-post", # relative path
                    pathname: '/new-post', // absolute path
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
        <Route path="/" render={() => <h1>Home 2</h1>}/> */}
        <Switch>
          <Route path="/new-post" component={NewPosts} />
          <Route path="/posts" component={Posts} />
          {/* <Route path="/" component={Posts} /> */}
          <Redirect from='/' to="/posts" />
        </Switch>
      </div>
    )
  }
}

export default Blog
