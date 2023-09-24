import './styling/App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
