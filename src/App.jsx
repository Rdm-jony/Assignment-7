import { Toaster } from 'react-hot-toast'
import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'

function App() {

  return (
    <div className='container mx-auto'>
      <Toaster></Toaster>
      <Header></Header>
      <Recipes></Recipes>

    </div>
  )
}

export default App
