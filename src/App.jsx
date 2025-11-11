/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import TeamsPage from './pages/TeamsPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import Layout from './components/layout.jsx'


function App() {
  // Once React Router is installed, you would replace this with:
  // <Routes><Route path="/team" element={<TeamsPage />} /></Routes>
  
  return (
    <Routes>
      <Route path ="/" element={<Layout><HomePage /> </Layout>} />
      <Route path ="/team" element={<Layout><TeamsPage /></Layout>} />
      <Route path ="/register" element={<Layout><RegisterPage /></Layout>} />
      <Route path ="/services" element={<Layout><TeamsPage /></Layout>} />
      <Route path ="*" element={<Layout><h1>404: Page Not Found</h1></Layout>} />
    </Routes>
  )
}

export default App;
