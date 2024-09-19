import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1";

import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

import TeamMembers from "./pages/TeamMembers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetailsPage />} />
        
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
