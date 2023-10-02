import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import NavBar from './NavBar/NavBar';
import Transcription from "./Pages/Transcription";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="home" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="courses" element={ <Courses/> } />
        <Route path="transcriptions" element={ <Transcription/> } />
      </Routes>
    </div>
  );
}

export default App;
