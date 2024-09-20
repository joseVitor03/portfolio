import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/projects/:id" element={ <Project /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
  );
}

export default App;
