import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newsfetch from "./components/Newsfetch";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/general"
          element={
            <Newsfetch
              apiKey={apiKey}
              key="general"
              pageSize="8"
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <Newsfetch
              apiKey={apiKey}
              key="business"
              pageSize="8"
              country="in"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <Newsfetch
              apiKey={apiKey}
              key="entertainment"
              pageSize="8"
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <Newsfetch
              apiKey={apiKey}
              key="technology"
              pageSize="8"
              country="in"
              category="technology"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <Newsfetch
              apiKey={apiKey}
              key="sports"
              pageSize="8"
              country="in"
              category="sports"
            />
          }
        />
        <Route
          path="/science"
          element={
            <Newsfetch
              apiKey={apiKey}
              key="science"
              pageSize="8"
              country="in"
              category="science"
            />
          }
        />
        <Route
          path="/health"
          element={
            <Newsfetch
              apiKey={apiKey}
              key="health"
              pageSize="8"
              country="in"
              category="health"
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default App;
