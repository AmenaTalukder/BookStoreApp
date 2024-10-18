import { Link } from "react-router-dom";
import CourseCards from "../Courses/CourseCards";
import CourseBook from "../Courses/CourseBook.json";

const Course = () => {
  return (
    <>
      <div className="banner my-24 dark:bg-slate-900 ">
        <div className="flex w-full flex-col lg:flex-row dark:bg-slate-800">
          <div className="card rounded-lg overflow-hidden shadow-lg grid w-full flex-grow place-items-center ">
            <div className="space-y-8 mx-5 px-4 mt-8 mb-8 items-center justify-center text-center ">
              <h1 className="text-2xl md:text-4xl text-black dark:text-white">
                We're delighted to have you{" "}
                <span className="text-pink-500"> Here! </span>
              </h1>
              <p className="mt-12 text-black dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                assumenda? Repellendus, iste corrupti? Tempore laudantium
                repellendus accusamus accusantium sed architecto odio, nisi
                expedita quas quidem nesciunt debitis dolore non aspernatur
                praesentium assumenda sint quibusdam, perspiciatis, explicabo
                sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt
                quis sed magnam consequatur!
              </p>
              <Link to="/">
                <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ml-12">
          {CourseBook.map((item) => (
            <CourseCards
              key={item.id}
              item={item}
              className="bg-white text-black p-4 rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
