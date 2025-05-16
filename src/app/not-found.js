import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="text-center">
        {/* Image or icon */}
        <img
          src="https://via.placeholder.com/150" // You can replace this with a custom 404 image
          alt="404"
          className="mb-6"
        />
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">Oops!</h1>
        <p className="text-xl mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>

        <div className="space-x-4">
          {/* Call-to-action buttons */}
          <Link href="/">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Go Back Home
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
              Contact Support
            </button>
          </Link>
        </div>

        <div className="mt-12">
          <input
            type="text"
            placeholder="Search for something..."
            className="px-4 py-2 text-black rounded-lg w-72"
          />
        </div>
      </div>

      <footer className="absolute bottom-5 text-sm text-gray-400">
        <p>© 2025 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
