'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          <Link href="/">
            <img src="/landing/logo.png" alt="WellInc Logo" style={{ maxWidth: '150px' }} />
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#howitworks" className="hover:text-blue-500">How it works</a>
          <a href="#reviews" className="hover:text-blue-500">Reviews</a>
          <a href="#faqs" className="hover:text-blue-500">FAQ&apos;s</a>
          <Link href="/intake/height_weight" className="hover:text-blue-500">Pricing</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/intake/height_weight"
            className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-500 transition"
          >
            Start Your Journey
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button type="button" className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

