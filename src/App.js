import './styling/App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>

        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
