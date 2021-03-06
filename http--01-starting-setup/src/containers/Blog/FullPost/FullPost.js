import React, { Component } from 'react'
import axios from 'axios'

import './FullPost.css'

class FullPost extends Component {
  state = {
    loadedPost: null
  }

  componentDidMount() {
    console.log(this.props);
    this.loadData()
  }
  
  componentDidUpdate() {
    this.loadData()
  }

  async loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id != this.props.match.params.id)
      ) {
        try {
          let res = await axios.get('/posts/' + this.props.match.params.id)

          this.setState({ loadedPost: res.data })
        } catch (err) {
          console.log(err)
        }
      }
    }
  }

  deletePostHandler = async () => {
    try {
      let res = await axios.delete('/posts/' + this.props.match.params.id)
      console.log(res)
    } catch (err) {
      console.log(err)
    }

  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...!</p>
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      )
    }
    return post
  }
}

export default FullPost
