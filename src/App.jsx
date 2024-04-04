import React from 'react'
import './App.css'
import PasswordGenerator from './components/PasswordGenerator'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='App'>
      <PasswordGenerator/>
    </div>
  )
}

export default App
