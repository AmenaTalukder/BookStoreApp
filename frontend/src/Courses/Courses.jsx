import Course from "../Components/Course";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Courses = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-white">
        <Course />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
