import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import NavBar from './NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="courses" element={ <Courses/> } />
      </Routes>
    </div>
  );
}

export default App;
