import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'
// import Radium, { StyleRoot } from 'radium'

class App extends Component {
  state = {
    persons: [
      {
        id: 'jslkdjaf',
        name: 'max',
        age: 28
      },
      {
        id: 'kjlsdjl',
        name: 'manu',
        age: 29
      },
      {
        id: 'kljsdlfkja',
        name: 'steph',
        age: 26
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id)

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons
    })
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      outline: 'none',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(i)}
                name={person.name}
                age={person.age}
                changed={e => this.nameChangedHandler(e, person.id)}
              />
            )
          })}
        </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi from react</h1>
        <p className={classes.join(' ')}>this is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle people
        </button>
        {persons}
      </div>
    )
  }
}

export default App
