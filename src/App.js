import './App.css';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Newsfetch from './components/Newsfetch';
import Home from './pages/Home';


function App()  {
  // const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/general" element={<Newsfetch />} />
        <Route path="/business" element={<Newsfetch />} />
        <Route path="/entertainment" element={<Newsfetch />} />
        <Route path="/technology" element={<Newsfetch />} />
        <Route path="/sports" element={<Newsfetch />} />
        <Route path="/science" element={<Newsfetch />} />
        <Route path="/health" element={<Newsfetch />} />        
      </Routes>
    </Router>
  );
}

export default App;
