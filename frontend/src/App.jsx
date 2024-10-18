import Courses from "./Courses/Courses";
import Home from "./HomePageElement/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./LogInFolder/SignUp";
import Contact from "./Contact/Contact";
import About from "./About/About";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white bg-white text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
