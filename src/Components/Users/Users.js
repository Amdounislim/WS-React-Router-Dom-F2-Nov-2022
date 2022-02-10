import React from 'react'
import UserCard from '../UserCard/UserCard'
import './Users.css'

const Users = ({ persons }) => {
  return (
    <div>
      <h1>Welcome, this is Users List page</h1>
      <div className='usersList'>{persons.map((el, i) => <UserCard user={el} key={i} />)}</div>
    </div>
  )
}

export default Users