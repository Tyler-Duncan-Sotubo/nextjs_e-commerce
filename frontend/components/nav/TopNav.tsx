import Link from "next/link";
import React, { FC } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducer/AuthSlice";

type Props = {};

const TopNav: FC<Props> = () => {
  const auth = useSelector(authSelector);
  const social = [
    { icon: <FaFacebookF /> },
    { icon: <FaTwitter /> },
    { icon: <FaInstagram /> },
    { icon: <FaYoutube /> },
  ];

  return (
    <div>
      <div className="flex justify-between px-4 py-3 font-display text-[12px] text-gray-600 bg-white border-b-[1px] duration-500">
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
          <div className="flex gap-4 ml-4">
            {social.map((icon, index) => (
              <ul key={index}>
                <Link href="/">
                  <li className="text-sm">{icon.icon}</li>
                </Link>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
