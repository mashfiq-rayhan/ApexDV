import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleDrawerToggle}></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5">
          {/* Mobile Header */}
          <div className="flex justify-between items-center mb-6">
            <Link href="/">
              <a>
                <img
                  src="/images/Navigation/brandLogo.svg"
                  alt="ApexDv"
                  className="h-auto max-h-[167px] max-w-[250px]"
                />
              </a>
            </Link>
            <button
              onClick={handleDrawerToggle}
              className="text-black hover:text-gray-700 p-2">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <hr className="my-4" />

          {/* Mobile Nav Items */}
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <a
                    className={`block px-4 py-3 text-lg font-medium hover:bg-gray-100 rounded transition-colors ${router.asPath === item.href ? "text-[#1CAF83]" : "text-black"}`}>
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <hr className="my-6 w-4/5 ml-6" />

          <p className="text-lg font-medium px-6 mb-4">info@apexdv.com</p>

          <a
            href="tel:+12038926285"
            className="mx-6 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1CAF83] text-[#1CAF83] rounded-full hover:bg-[#1CAF83] hover:text-white transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +1203-892-6285
          </a>

          <hr className="my-6 w-4/5 ml-6" />

          {/* Social Icons */}
          <div className="flex gap-4 px-4">
            <a
              href="https://www.facebook.com/apexdvltd"
              className="hover:opacity-75 transition-opacity">
              <img
                src="/images/LandingPage/Foot/facebook.svg"
                alt="facebook"
                className="w-7 h-7"
              />
            </a>
            <a
              href="https://twitter.com/apexdv_nft"
              className="hover:opacity-75 transition-opacity">
              <img
                src="/images/LandingPage/Foot/twitter.svg"
                alt="twitter"
                className="w-7 h-7"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/apexdv/"
              className="hover:opacity-75 transition-opacity">
              <img
                src="/images/LandingPage/Foot/linkedin.svg"
                alt="linkedin"
                className="w-7 h-7"
              />
            </a>
            <a
              href="https://www.instagram.com/apexdv.nft/"
              className="hover:opacity-75 transition-opacity">
              <img
                src="/images/LandingPage/Foot/instagram.svg"
                alt="instagram"
                className="w-7 h-7"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white h-[120px] flex items-center shadow-[0_4px_29px_rgba(0,0,0,0.05)] relative">
        <div className="container mx-auto px-5">
          {/* Decorative Ellipses (Desktop only) */}
          <div className="hidden lg:block absolute"></div>

          <div className="flex justify-between items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={handleDrawerToggle}
              className="lg:hidden text-black p-2 ml-6 hover:bg-gray-100 rounded transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/">
              <a className="flex-shrink-0">
                <img
                  src="/images/Navigation/brandLogo.svg"
                  alt="ApexDv"
                  className="h-auto max-h-[167px] max-w-[250px] md:max-h-[233px] md:max-w-[350px]"
                />
              </a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 ml-10">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`px-4 py-2 text-lg font-medium hover:text-[#1CAF83] transition-colors ${router.asPath === item.href ? "text-[#1CAF83]" : "text-black"}`}>
                    {item.name}
                  </a>
                </Link>
              ))}

              <a
                href="tel:+12038926285"
                className="ml-2 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1CAF83] text-[#1CAF83] rounded-full hover:bg-[#1CAF83] hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1203-892-6285
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
