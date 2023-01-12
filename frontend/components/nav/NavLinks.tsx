import Link from "next/link";
import React, { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import data from "../../utils/data";

type Props = {};

const NavLinks: FC<Props> = () => {
  const { navlinks } = data;

  return (
    <>
      {navlinks.map((link, index) => (
        <div key={index} className="z-50 font-display text-sm">
          <div className=" text-left md:cursor-pointer group ">
            <h1 className="py-2 flex gap-1 justify-between items-center md:pr-0 pr-5  group">
              {link.name}
              <IoIosArrowDown />
            </h1>
            <div></div>
            {link.submenu && (
              <div>
                <div className="absolute hidden group-hover:md:block hover:md:inline-block">
                  <div className="bg-white px-8 py-5 grid grid-cols-3 gap-20">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 my-4 ">
                            <Link
                              href={slink.link}
                              className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
