import './styling/App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Reviews from './pages/Reviews'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
        </Routes>

        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
