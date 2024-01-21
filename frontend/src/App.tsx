import { Provider } from 'react-redux'
import appStore from '@store/appStore'
import AppLayout from './layout/AppLayout'

const App = () => {
  return (
    <Provider store={appStore}>
      <AppLayout />
    </Provider>
  )
}

export default App
