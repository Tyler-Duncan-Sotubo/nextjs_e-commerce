import Link from "next/link";
import React from "react";
import { MdDashboard, MdOutlinePayments, MdPeopleAlt } from "react-icons/md";
import {
  IoStatsChart,
  IoBagHandleOutline,
  IoLogOutOutline,
  IoSettingsOutline,
  IoCloudUploadSharp,
} from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";

const data = [
  { name: "dashboard", icon: <MdDashboard />, path: "/admin/dashboard" },
  { name: "statistics", icon: <IoStatsChart />, path: "/admin/dashboard" },
  { name: "payment", icon: <MdOutlinePayments />, path: "/admin/dashboard" },
  { name: "transactions", icon: <GrTransaction />, path: "/admin/dashboard" },
  { name: "products", icon: <IoBagHandleOutline />, path: "/admin/dashboard" },
  { name: "customers", icon: <MdPeopleAlt />, path: "/" },
];

const footer = [
  { name: "setting", icon: <IoSettingsOutline />, path: "/admin/dashboard" },
  { name: "upload", icon: <IoCloudUploadSharp />, path: "/admin/upload" },
  { name: "logout", icon: <IoLogOutOutline />, path: "/admin/dashboard" },
];

const Sidebar = () => {
  return (
    <div className="shadow-sm h-screen flex flex-col bg-stone-100">
      <div className="text-center py-8">
        <Link href="/">
          <h2 className="text-xl">CROYDON</h2>
        </Link>
      </div>
      <div className="flex flex-col h-screen justify-between text-sm">
        <div className="py-10 px-[18%] font-display capitalize text-gray-600">
          {data.map((item, index) => (
            <Link key={index} href={item.path}>
              <div key={index} className="flex items-center mb-6">
                <p className="text-xl mr-4 text-black">{item.icon}</p>
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <div className="py-6 px-[18%] font-display capitalize text-gray-600">
            {footer.map((item, index) => (
              <Link key={index} href={item.path}>
                <div className="flex items-center mb-6">
                  <p className="text-xl mr-4 text-black">{item.icon}</p>
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
