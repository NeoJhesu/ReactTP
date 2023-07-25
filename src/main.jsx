import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContexProvider from './ContextManager/ContexProvider.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ContexProvider>
    <App />
</ContexProvider>
</BrowserRouter>
)
