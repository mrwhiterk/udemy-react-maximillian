import React, { Component } from 'react'
// import queryString from 'query-string'

class Course extends Component {
  state = {
    courseTitle: ''
  }

  componentDidMount() {
    this.parseQueryParams()
  }

  componentDidUpdate() {
    this.parseQueryParams()
  }

  parseQueryParams() {
    const query = new URLSearchParams(this.props.location.search)

    for (let param of query.entries()) {
      if (this.state.courseTitle !== param[1]) {
        this.setState({ courseTitle: param[1] })
      }
    }
  }

  render() {
    // const query = queryString.parse(this.props.location.search)
    // let title = [...query.entries()][0][1]

    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    )
  }
}

export default Course
