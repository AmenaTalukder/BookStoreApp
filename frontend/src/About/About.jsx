import { useState, useEffect } from "react";

const About = ({ bookstore }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className="dark:bg-gray-900 dark:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to {bookstore}, your one-stop destination for [specific area,
          e.g., online courses, educational resources, etc.]! Our mission is to
          empower learners of all ages by providing high-quality courses and
          resources that cater to diverse interests and skill levels.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Vision</h2>
        <p className="mb-4">
          At {bookstore}, we envision a world where everyone has access to the
          knowledge and skills they need to succeed. We believe that education
          is the key to personal and professional growth, and we strive to make
          learning accessible, engaging, and enjoyable for everyone.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">What We Offer</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Diverse Course Catalog:</strong> Explore our extensive range
            of courses covering various subjects, including [list some subjects
            or categories, e.g., technology, arts, business, health, etc.].
          </li>
          <li>
            <strong>Expert Instructors:</strong> Learn from experienced
            professionals and industry experts who are passionate about sharing
            their knowledge.
          </li>
          <li>
            <strong>User-Friendly Platform:</strong> Our website is designed to
            make your learning experience smooth and enjoyable.
          </li>
          <li>
            <strong>Community Support:</strong> Join our vibrant community of
            learners! Connect with fellow students, share your insights, and
            participate in discussions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Us?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Flexible Learning:</strong> Learn at your own pace, anytime
            and anywhere.
          </li>
          <li>
            <strong>Affordable Education:</strong> Our courses are competitively
            priced, with discounts and scholarships available.
          </li>
          <li>
            <strong>Ongoing Updates:</strong> We continually update our course
            offerings to ensure you are learning the most current information.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Join Us Today!</h2>
        <p>
          Embark on your learning journey with {bookstore} and unlock your
          potential! Sign up today to access our wide range of courses, connect
          with experts, and start achieving your educational goals.
        </p>
      </div>
    </div>
  );
};

export default About;
