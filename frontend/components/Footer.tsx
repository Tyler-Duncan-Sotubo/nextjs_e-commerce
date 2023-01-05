import Link from "next/link";
import React, { FC } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

type Props = {};

export const Footer: FC<Props> = () => {
  return (
    <footer className="flex shadow-inner w-full justify-between py-16 px-16 bg-gray-100">
      <div className="w-1/4">
        <div className="flex-Col">
          <h2 className="text-2xl my-4">CROYDON</h2>
          <h3>© 2022 croydon All Rights Reserved</h3>
        </div>
      </div>
      <div className="flex w-3/4 justify-between px-16">
        <ul className="flex-Col list-none">
          <li className="font-bold">
            <Link href="/">ABOUT</Link>
          </li>
          <li className="flex my-4 text-gray-500">
            <Link href="/">About us</Link>
          </li>
          <li className="flex my-4 text-gray-500">
            <Link href="/">Store location</Link>
          </li>
          <li className="flex my-4 text-gray-500">
            <Link href="/">Contact</Link>
          </li>
          <li className="flex my-4 text-gray-500">
            <Link href="/">Orders tracking</Link>
          </li>
        </ul>
        <div>
          <ul className="flex-Col list-none">
            <li className="font-bold">
              <Link href="/">USEFUL LINKS</Link>
            </li>
            <li className="flex my-4 text-gray-500">
              <Link href="/">Returns</Link>
            </li>
            <li className="flex my-4 text-gray-500">
              <Link href="/">Support Policy</Link>
            </li>
            <li className="flex my-4 text-gray-500">
              <Link href="/">Size guide</Link>
            </li>
            <li className="flex my-4 text-gray-500">
              <Link href="/">FAQs</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex-Col list-none">
            <h3 className="font-bold">
              <Link href="/"></Link>FOLLOW US ON
            </h3>
            <li className="flex my-4 text-gray-500 items-center">
              <FaTwitter className="mr-3" />
              <Link href="/">Twitter</Link>
            </li>
            <li className="flex my-4 text-gray-500 items-center">
              <FaFacebookF className="mr-3" />
              <Link href="/">Facebook</Link>
            </li>
            <li className="flex my-4 text-gray-500 items-center">
              <FaInstagram className="mr-3" />
              <Link href="/">Instagram</Link>
            </li>
            <li className="flex my-4 text-gray-500 items-center">
              <FaYoutube className="mr-3" />
              <Link href="/">Youtube</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
