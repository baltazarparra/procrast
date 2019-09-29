import React from 'react'
import { render } from 'react-dom'
import App from './App'
import Store from './Stores/Store'
import registerServiceWorker from './registerServiceWorker'

const Index = () => (
  <Store>
    <App />
  </Store>
)

render(<Index />, document.getElementById('root'))

registerServiceWorker()
