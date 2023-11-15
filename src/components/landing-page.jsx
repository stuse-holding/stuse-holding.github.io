/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uCFtg80N5Y5
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-700">
        <Link href="#">
          <svg
            className=" h-8 w-8 text-gray-200"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
        </Link>
        <nav className="space-x-4">
          <Link className="text-base font-medium hover:text-gray-400" href="#">
            Services
          </Link>
          <Link className="text-base font-medium hover:text-gray-400" href="#">
            Products
          </Link>
          <Link className="text-base font-medium hover:text-gray-400" href="#">
            About Us
          </Link>
          <Link className="text-base font-medium hover:text-gray-400" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-gray-800">
        <section className="flex flex-col items-center justify-center text-center h-[500px] px-4 py-16 bg-gray-900">
          <h1 className="text-4xl font-bold">Welcome to Stuse Holdings LLC</h1>
          <p className="mt-4 text-lg font-medium">Enterprise Rust consulting and development services</p>
          <Button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md">Contact Us</Button>
        </section>
        <section className="grid gap-6 px-4 py-16 md:grid-cols-3 bg-gray-900" id="services">
          <h2 className="col-span-full text-2xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-col items-center">
            <svg
              className=" h-8 w-8 mb-4 text-yellow-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <h3 className="text-lg font-medium">Rust Development</h3>
            <p className="mt-2 text-center">
              We offer top-notch Rust development services to build high-performance systems.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className=" h-8 w-8 mb-4 text-blue-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <h3 className="text-lg font-medium">Security Consulting</h3>
            <p className="mt-2 text-center">
              Our experts provide security consulting to ensure your Rust applications are secure.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className=" h-8 w-8 mb-4 text-green-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="20" y2="10" />
              <line x1="18" x2="18" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="16" />
            </svg>
            <h3 className="text-lg font-medium">Performance Optimization</h3>
            <p className="mt-2 text-center">
              We optimize your Rust applications to achieve maximum performance and efficiency.
            </p>
          </div>
        </section>
        <section className="grid gap-6 px-4 py-16 md:grid-cols-3 bg-gray-900" id="products">
          <h2 className="col-span-full text-2xl font-bold text-center mb-8">Our Products</h2>
          <div className="flex flex-col items-center">
            <svg
              className=" h-8 w-8 mb-4 text-red-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5V19A9 3 0 0 0 21 19V5" />
              <path d="M3 12A9 3 0 0 0 21 12" />
            </svg>
            <h3 className="text-lg font-medium">Stuse</h3>
            <p className="mt-2 text-center">
              Our FUSE-based solution for enabling data access for data science, ETL processing, and Business
              Intelligence.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className=" h-8 w-8 mb-4 text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            <h3 className="text-lg font-medium">Coming Soon</h3>
            <p className="mt-2 text-center">Stay tuned for more innovative products.</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className=" h-8 w-8 mb-4 text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            <h3 className="text-lg font-medium">Coming Soon</h3>
            <p className="mt-2 text-center">We're working on something exciting.</p>
          </div>
        </section>
        <section className="px-4 py-16 bg-gray-900">
          <h2 className="text-2xl font-bold text-center">What Our Clients Say</h2>
          <div className="mt-8 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            <div className="p-4 border border-gray-700 rounded-md bg-gray-800">
              <p className="italic text-gray-300">
                "RustPro Solutions provided us with excellent Rust development services."
              </p>
              <p className="mt-4 font-medium text-gray-400">- Client A</p>
            </div>
            <div className="p-4 border border-gray-700 rounded-md bg-gray-800">
              <p className="italic text-gray-300">"Their security consulting was top-notch and very comprehensive."</p>
              <p className="mt-4 font-medium text-gray-400">- Client B</p>
            </div>
            <div className="p-4 border border-gray-700 rounded-md bg-gray-800">
              <p className="italic text-gray-300">
                "We saw a significant improvement in our Rust application's performance."
              </p>
              <p className="mt-4 font-medium text-gray-400">- Client C</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-between px-8 py-4 border-t border-gray-700 bg-gray-900">
        <p className="text-sm text-gray-400">© 2023 Stuse Holdings LLC</p>
        <div className="space-x-4">
          <Link href="#">
            <svg
              className=" h-6 w-6 text-gray-400 hover:text-gray-300"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link href="#">
            <svg
              className=" h-6 w-6 text-gray-400 hover:text-gray-300"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
          <Link href="#">
            <svg
              className=" h-6 w-6 text-gray-400 hover:text-gray-300"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect height="12" width="4" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  )
}

