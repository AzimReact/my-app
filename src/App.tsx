import { Route, Routes, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense, useState } from "react";
import './styles/index.scss';



function App() {
  // const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  // const toggleTheme = () => {
  //   setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  // }
  
  return (
    <div className={`app`}>
      <button>TOGGLE</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div >
  )
}

export default App