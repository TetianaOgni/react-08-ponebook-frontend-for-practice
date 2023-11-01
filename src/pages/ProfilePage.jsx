import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserData } from 'redux/selectors'
import {Link} from 'react-router-dom'
const ProfilePage = () => {
  
  const user = useSelector(selectUserData)

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img src={user.avatarUrl.includes('gravatar')
            ? user.avatarUrl
            : 'http://localhost:4400/' + user.avatarUrl
        } alt="avatar" width={"50px"}/>
      <Link to={'update'}>Update profile</Link>
    </div>
  )
}

export default ProfilePage
