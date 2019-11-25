import React from 'react'
import Person from './Person/Person'

export default props =>
  props.persons.map((person, i) => {
    return (
      <Person
        key={person.id}
        click={() => props.clicked(i)}
        name={person.name}
        age={person.age}
        changed={e => props.changed(e, person.id)}
      />
    )
  })
