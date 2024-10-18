import banner from "../assets/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="banner my-24">
        <div className="flex w-full flex-col lg:flex-row ">
          <div className="card rounded-lg overflow-hidden shadow-lg grid w-full h-200 flex-grow place-items-center">
            <div className="space-y-8 mx-5 px-4 mt-8 mb-8">
              <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
                Hello, welcomes here to learn something{" "}
                <span className="text-orange-500">new everyday!!!</span>
              </h1>
              <p className="text-sm md:text-xl text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                et totam. Tempora amet atque expedita, quae corrupti totam sed
                pariatur corporis at veniam est voluptas animi!
              </p>
              <form>
                <label className="input input-bordered flex items-center gap-2 rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-200 p-2 bg-gray-800 dark:bg-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 text-white opacity-100 dark:text-black "
                    aria-hidden="true"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow bg-transparent dark:placeholder-black  border-none outline-none placeholder-white transition-all duration-200 focus:placeholder-opacity-0"
                    aria-label="Email"
                    placeholder="Email"
                  />
                </label>

                <button
                  className="btn mt-6 text-white bg-orange-500 border-2 border-transparent hover:bg-orange-400 hover:border-orange-400 transition-colors duration-200"
                  type="submit"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>

          <div className="card  rounded-lg overflow-hidden shadow-lg grid w-full h-200 flex-grow place-items-center">
            <img
              src={banner}
              className="md:w-[550px] md:h-[460px] md:ml-12"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
