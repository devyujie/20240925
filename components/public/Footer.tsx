import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-20 mx-auto max-w-7xl px-6 pb-8 mt-8  border-t border-gray-900/10 pt-16">
        <div>
          <Image src="/favicon.ico" alt="logo" width={35} height={35} />
          <p className="text-sm leading-6 text-gray-600 my-8">Chat with any PDF: ask questions, get summaries, find information, and more.</p>
          <ul className="flex gap-6 justify-start  items-center">
            <li>
              <Link href="/" className="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765c1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6l5.207 3.005l-5.212 2.995z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Product</h3>
          <ul className="mt-6 space-y-4">
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Chrome Extension
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                API Docs
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Video tutorial
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">We also built</h3>
          <ul className="mt-6 space-y-4">
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Resume AI Scanner
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Invoice AI Scanner
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                AI Quiz Generator
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                QuickyAI
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Docsium
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                PDF GPTs
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                PDF AI generator
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Other PDF tools
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Company</h3>
          <ul className="mt-6 space-y-4">
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                PDF.ai vs ChatPDF
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                PDF.ai vs Acrobat Reader
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Legal
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Affiliate program 💵
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                Investor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
