import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>
        <App />
      </Router>,
    )
  })
})
