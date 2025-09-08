import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { UrlShortener } from './pages/UrlShortener'
import { Statistics } from './pages/Statistics'

function App(){


  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<UrlShortener/>}/>
        <Route path='stats' element={<Statistics/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
