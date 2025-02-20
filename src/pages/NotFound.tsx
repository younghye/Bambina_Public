export default function NotFound() {
  return (
    <div className="relative font-serif top-[35vh]">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-8xl md:text-9xl font-bold mb-8">
            <span>404</span>
          </h2>
          <p className="text-2xl md:text-3xl mb-10">
            Sorry, we couldn't find this page.
          </p>

          <a
            href={process.env.PUBLIC_URL + "/home"}
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 focus:outline-none"
          >
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
