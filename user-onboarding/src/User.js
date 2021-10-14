import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Gathering all the Users&nbsp;s details...</h3>
  }

  return (
    <div className='container'>
      <h2>{details.firstName} {details.lastName}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User