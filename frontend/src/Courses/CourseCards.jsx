const CourseCards = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-72 h-96 bg-white text-black shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 dark:bg-slate-900 dark:text-white dark:border-white border-2 dark:border-opacity-60">
          <figure className="h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </figure>
          <div className="card-body flex flex-col justify-between p-5">
            <h2 className="card-title flex justify-between items-center">
              <span className="line-clamp-2">{item.name}</span>
              {item.isNew && (
                <div className="badge badge-accent animate-pulse">New</div>
              )}
              <div
                className={` bg-pink-500 badge ${
                  item.category === "Featured"
                    ? "badge-primary"
                    : "badge-secondary"
                }`}
              >
                {item.category}
              </div>
            </h2>
            <p className="flex-grow line-clamp-2">{item.title}</p>
            <div className="card-actions justify-between items-center">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-2 h-8 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-yellow-500 hover:text-white transition-colors duration-300">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCards;
