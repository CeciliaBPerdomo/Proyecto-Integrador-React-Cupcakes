import './App.css'


import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
import Rutas from './routes/Rutas.jsx'

function App() {
  return (
    <Layout>
      {/* Navbar */}
      <Navbar />
      {/* Rutas */}
      <Rutas />
      {/* Footer */}
      
    </Layout>
  )
}

export default App
