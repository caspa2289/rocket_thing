import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import App from './components/App'
// import reportWebVitals from './reportWebVitals'

const container = document?.getElementById('root')

if (!container) throw new Error('Unable to find root container')

const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// reportWebVitals()
