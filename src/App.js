import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/about";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Header from "./components/header";
import ContextAuth from "./context/context";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <ContextAuth>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/sign-in" element={<Signin />}/>
          <Route path="/sign-up" element={<Signup /> }/>
          <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />}/>
          </Route>
        </Routes>
        </ContextAuth>
      </Router>
    </>
  );
}

export default App;
