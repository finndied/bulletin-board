import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchPage from './pages/SearchPage/SearchPage.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
  {
    path: 'search/:category',
    element: <SearchPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
