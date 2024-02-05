import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from '@store/appStore'

import AuthLayout from './layout/AuthLayout'
import Login from '@pages/auth/Login'
import Signup from '@pages/auth/Signup'

import PublicLayout from './layout/PublicLayout'
import Home from '@pages/public/home'
import Report from '@pages/public/report'

import AppLayout from './layout/AppLayout'
import Dashboard from '@pages/dashboard'
import Websites from '@pages/websites'
import Analysis from '@pages/analysis'
import W3c from '@pages/w3c'

const App = () => {
  return (
    <Provider store={appStore}>
      <Routes>
        <Route path="/*" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/*" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Report />} />
          <Route path="report" element={<Report />} />
        </Route>
        <Route path="/dashboard/*" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="websites" element={<Websites />} />
          <Route path="analysis" element={<Analysis />}>
            <Route path=":id" element={<Analysis />} />
          </Route>
          <Route path="w3c" element={<W3c />}>
            <Route path=":id" element={<W3c />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
