import React from 'react'

const Profile = ({fullName , bio , profession ,children}) => {
  return (
    <div>Profile
      <h1>fullName</h1>
      {profession}
      {bio}
      {fullName}
      {children}
      


    </div>
    
  )
}

export default Profile