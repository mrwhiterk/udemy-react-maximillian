import React from 'react'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import classes from './Person.css'
import PropTypes from 'prop-types'

class Person extends React.Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click} key='a'>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p key='b'>{this.props.children}</p>
        <input
          key='c'
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person)
