import { Link } from "react-router-dom"; // Import Link correctly

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-800">
        <div className="w-[600px]">
          <div className="modal-box bg-white">
            <form onSubmit={handleSubmit}>
              {/* Close button to go back to home */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Contact Us</h3>

              {/* Full Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-full px-3 py-1 border rounded-md bg-transparent"
                  required
                />
                <br />
              </div>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-1 border rounded-md bg-transparent"
                  required
                />
                <br />
              </div>

              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  placeholder="Type your message"
                  className="w-full h-40 px-3 py-1 border rounded-md bg-transparent"
                  required
                />
                <br />
              </div>

              {/* Submit Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-gray-800 text-white rounded-md px-3 py-1 hover:bg-gray-900 duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
