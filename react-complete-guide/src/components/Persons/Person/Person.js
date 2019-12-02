import React from 'react'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import classes from './Person.css'
import PropTypes from 'prop-types'

import AuthContext from '../../../context/auth-context';

class Person extends React.Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus()
  }

  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated</p> : <p>please log in</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click} key="a">
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p key="b">{this.props.children}</p>
        <input
          key="c"
          // ref={inputEl => {
          //   this.inputElement = inputEl
          // }}
          ref={this.inputElementRef}
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
