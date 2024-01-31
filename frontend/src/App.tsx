import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from '@store/appStore'
import AppLayout from './layout/AppLayout'
import Dashboard from '@pages/dashboard'
import Websites from '@pages/websites'
import Analysis from '@pages/analysis'

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
        </Route>
        <Route path="/*">
          <Route index element={<h1>Publically Accessible</h1>} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
