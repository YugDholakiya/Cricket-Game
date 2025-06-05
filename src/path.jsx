
import {HashRouter, Routes, Route} from "react-router-dom"
import App from './App.jsx'
import GameOver from './GameOver.jsx'

export default function Path() {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/GameOver' element={<GameOver/>}/>
      </Routes>
      </HashRouter> 
    </div>
  )
}
