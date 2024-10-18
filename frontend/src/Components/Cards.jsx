import "../theme.css";

const Cards = ({ item }) => {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-72 h-96 shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 dark:bg-slate-900 dark:text-white dark:border bg-white text-black mb-16">
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
              className={`badge ${
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
              Click here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
