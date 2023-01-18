import Link from "next/link";
import React, { FC } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import data from "@/utils/data";

type Props = {};

const social = [
  { icon: <FaFacebookF />, name: "Facebook" },
  { icon: <FaTwitter />, name: "Twitter" },
  { icon: <FaInstagram />, name: "Instagram" },
  { icon: <FaYoutube />, name: "Youtube" },
];

export const Footer: FC<Props> = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-10 p-10 shadow-inner">
      <div className="">
        <div className="flex-Col">
          <h2 className="text-2xl">CROYDON</h2>
          <h3>© 2022 croydon All Rights Reserved</h3>
        </div>
      </div>
      <div className="flex-Col list-none">
        <h3 className="font-bold">
          <Link href="/">ABOUT</Link>
        </h3>
        {data.about.map((item, index) => (
          <ul key={index}>
            <Link href="/">
              <li className="flex my-4 text-gray-500">{item.name}</li>
            </Link>
          </ul>
        ))}
      </div>
      <div className="flex-Col list-none">
        <h3 className="font-bold">
          <Link href="/">USEFUL LINKS</Link>
        </h3>
        {data.links.map((item, index) => (
          <ul key={index}>
            <Link href="/">
              <li className="flex my-4 text-gray-500">{item.name}</li>
            </Link>
          </ul>
        ))}
      </div>
      <div className="flex-Col list-none">
        <h3 className="font-bold">
          <Link href="/">FOLLOW US ON</Link>
        </h3>
        {social.map((item, index) => (
          <Link href="/" key={index}>
            <ul className="flex my-4 text-gray-500 items-center">
              <li className="mr-3">{item.icon}</li>
              <p>{item.name}</p>
            </ul>
          </Link>
        ))}
      </div>
    </footer>
  );
};
