const footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-400 pt-6 mt-auto bottom-0 w-full z-30">
      <div className="container mx-auto px-4 pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="col-span-2">
            <h3 className="text-2xl text-white font-semibold">
              Stay in the Loop
            </h3>
            <p>The latest news straight in your inbox weekly!</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border-none outline-none mt-4"
              />
              <button className="bg-[#eec900] w-[42px] h-[40px] cursor-pointer hover:bg-yellow-300 duration-100 transition ease-in-out">
                <i className="bi bi-chevron-right text-black"></i>
              </button>
            </form>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-white uppercase">
              company
            </h4>
            <ul className="text-sm font-light flex flex-col gap-3">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Post
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Create Post
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-white uppercase">
              help
            </h4>
            <ul className="text-sm font-light flex flex-col gap-3">
              <li>
                <a href="#" className="hover:underline">
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-white uppercase">
              legal
            </h4>
            <ul className="text-sm font-light flex flex-col gap-3">
              <li>
                <a href="#" className="hover:underline">
                  Damages
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Claims
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4 text-white uppercase">
              Follow Us
            </h4>
            <ul className="text-sm font-light flex gap-3">
              <li>
                <a href="#" className="hover:underline">
                  <i className="bi bi-facebook text-gray-400 text-xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <i className="bi bi-tiktok text-gray-400 text-xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <i className="bi bi-instagram text-gray-400 text-xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <i className="bi bi-twitter-x text-gray-400 text-xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <i className="bi bi-messenger text-gray-400 text-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#2b2b2b] w-screen p-2 px-3">
        <div className="text-xs  font-light block text-center md:flex justify-between items-center">
          <p>Copyright&copy; 2024 - Chicadora Inc.</p>
          <div className="hidden md:flex gap-3">
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
