import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from '@store/appStore'
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
        <Route path="/*" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
