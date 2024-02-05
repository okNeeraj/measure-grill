import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className="authenticate">
      <Outlet />
    </main>
  )
}

export default AuthLayout
