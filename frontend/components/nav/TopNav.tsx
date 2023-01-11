import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducer/AuthSlice";

type Props = {};

const TopNav: FC<Props> = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const auth = useSelector(authSelector);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div>
      {scrollPosition > 20 ? null : (
        <nav className="flex justify-between px-4 py-3 font-display text-[12px] text-gray-600 bg-white border-b-[1px] duration-500">
          <div className="flex gap-3 ">
            <div className="border-r-[1px] pr-4">
              <p>English</p>
            </div>
            <div className="border-r-[1px] pr-4">Currency</div>
            <div>
              Order Online
              <span className="font-semibold ml-2 underline">
                Call(0123) 456789
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="border-r-[1px] pr-4 capitalize">
              {auth._id ? (
                "hello," + " " + auth.name
              ) : (
                <Link href="/login-register">Login/SignUp</Link>
              )}
            </div>
            <div>
              <ul className="flex pl-4">
                <li className="text-gray-500 items-center">
                  <FaTwitter className="mr-3" />
                </li>
                <li className="text-gray-500 items-center">
                  <FaFacebookF className="mr-3" />
                </li>
                <li className="text-gray-500 items-center">
                  <FaInstagram className="mr-3" />
                </li>
                <li className="text-gray-500 items-center">
                  <FaYoutube className="mr-3" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default TopNav;
