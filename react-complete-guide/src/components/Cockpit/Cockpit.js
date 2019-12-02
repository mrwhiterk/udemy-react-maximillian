import React, { useEffect, useRef, useContext } from 'react'

import classes from './Cockpit.css'

import AuthContext from '../../context/auth-context'

const cockpit = props => {
  const toggleBtnRef = useRef(null)
  const authContext = useContext(AuthContext)

  console.log(authContext.authenticated)

  useEffect(() => {
    console.log('[cockpit.js] useEffect')

    toggleBtnRef.current.click()
    return () => {
      console.log('[cockpit.js] cleanup work')
    }
  }, [])

  useEffect(() => {
    console.log('[cockpit.js] 2nd useEffect')
    return () => {
      console.log('[cockpit.js] cleanup work in 2nd useEffect')
    }
  })

  let assignedClasses = []

  let btnClass = ''

  if (props.showPersons) {
    btnClass = classes.Red
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>this is working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle people
      </button>

        <button onClick={authContext.login}>log in</button>

    </div>
  )
}

export default React.memo(cockpit)
