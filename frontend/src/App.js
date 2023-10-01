import { Routes, Route } from "react-router-dom"
import Home from './Home';
import About from './About';
import Courses from './Courses';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="courses" element={ <Courses/> } />
      </Routes>
    </div>
  );
}

export default App;
