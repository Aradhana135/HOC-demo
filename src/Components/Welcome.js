import React from 'react'
import Hoc from './Hoc'

function Welcome  (props)  {
  return (
    <h1>Welcome {props.name}</h1>
  )
}

export default Hoc(Welcome);