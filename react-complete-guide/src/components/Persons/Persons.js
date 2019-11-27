import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log(' get derived state from props')
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[app.js] shouldComponentUpdate')
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('persons.js getSnapshotbeforeUpdate')
    return { message: 'snapshot' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('persons.js componentDidUpdate')
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('[persons.js] componentWillUnmount')
  }

  render() {
    return this.props.persons.map((person, i) => {
      return (
        <Person
          click={() => this.props.clicked(i)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={e => this.props.changed(e, person.id)}
        />
      )
    })
  }
}

export default Persons
