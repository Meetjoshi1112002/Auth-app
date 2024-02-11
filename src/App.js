import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/about";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/sign-in" element={<Signin />}/>
          <Route path="/sign-up" element={<Signup /> }/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
