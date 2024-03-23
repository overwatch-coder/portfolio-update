import Link from "next/link";

export const metadata = {
  title: "404 | Page Not Found - Overwatch Coder",
  description: "Page Not Found",
};

const NotFound = () => {
  return (
    <section className="flex flex-col items-center mt-20 space-y-5">
      <h1 className="font-bold font-[georgia] text-6xl text-black">404</h1>
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="text-gray-600">
        We are sorry, the page you requested could not be found.
      </p>
      <Link
        href={"/"}
        className="px-5 py-3 text-white uppercase bg-gray-800 hover:bg-transparent border hover:border-gray-800 hover:text-black"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
