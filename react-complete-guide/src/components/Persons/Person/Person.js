import React from 'react'
import Aux from '../../../hoc/Aux'
import classes from './Person.css'

class Person extends React.Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        {this.props.children}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    )
  }
}

export default Person
