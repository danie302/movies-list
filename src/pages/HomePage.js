import React, { useContext } from 'react'
import { AuthContext } from '../store/auth-context'

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  const user = JSON.parse(authCtx.user);
  return (
    <div>
      <p>Welcome {user.name}</p>
    </div>
  )
}

export default HomePage