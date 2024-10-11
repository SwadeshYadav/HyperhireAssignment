import React from "react";
import Image from "next/image";
import { ArrowForward, Person, Language, Code } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
        {/* Header Section */}
        <div className="p-2">
          <div className="flex items-center space-x-[-10px]">
            <Image
              src="https://hyperhire.in/logo-dark.svg" // Use the Image component
              alt="Hyperhire Logo"
              width={180} // Specify width
              height={30} // Specify height
              className="md:h-7 h-6"
            />
          </div>

          <h4 className="text-[16px] mt-1 font-semibold">
            We match the best talent across national barriers.{" "}
          </h4>
          <h5 className="text-[14px] font-semibold">010-0000-0000 </h5>
          <h2 className="text-[14px] font-semibold">aaaaa@naver.com</h2>
        </div>

        {/* Recruitment Sections */}
        <div className="p-2 flex flex-col justify-center items-center">
          <Person className="text-gray-500 text-[24px] mb-1" />
          <h4 className="text-[16px] mt-1 font-semibold">
            Remote recruitment of overseas developers
          </h4>
          <div className="flex items-center">
            <h5 className="text-[15px] mr-2">Go to</h5>
            <ArrowForward className="text-gray-500 text-[18px] border border-gray-500 rounded" />
          </div>
        </div>

        <div className="p-2 flex flex-col justify-center items-center">
          <Language className="text-gray-500 text-[24px] mb-1" />
          <h4 className="text-[16px] mt-1 font-semibold">
            Foreign remote recruitment (non-development)
          </h4>
          <div className="flex items-center">
            <h5 className="text-[15px] mr-2">Go to</h5>
            <ArrowForward className="text-gray-500 text-[18px] border border-gray-500 rounded" />
          </div>
        </div>

        <div className="p-2 flex flex-col justify-center items-center">
          <Code className="text-gray-500 text-[24px] mb-1" />
          <h4 className="text-[16px] mt-1 font-semibold">
            Hiring foreigners who can speak Korean
          </h4>
          <div className="flex items-center">
            <h5 className="text-[15px] mr-2">Go to</h5>
            <ArrowForward className="text-gray-500 text-[18px] border border-gray-500 rounded" />
          </div>
        </div>

        <div className="p-2 flex flex-col justify-center items-center">
          <SettingsIcon className="text-gray-500 text-[24px] mb-1" />
          <h4 className="text-[16px] mt-1 font-semibold">
            Overseas developer utilization service
          </h4>
          <div className="flex items-center">
            <h5 className="text-[15px] mr-2">Go to</h5>
            <ArrowForward className="text-gray-500 text-[18px] border border-gray-500 rounded" />
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between flex-wrap max-w-7xl mx-auto">
        {/* Business Name Section */}
        <div className="flex-1 p-2">
          <p className="md:text-[17px] text-[15px] font-bold">Business name</p>
          <p className="md:text-[17px] text-[15px] font-semibold">Hyper Hire</p>
          <h4 className="md:text-[17px] text-[15px] font-semibold">
            Hyperhire India Private Limited
          </h4>
        </div>

        {/* CEO Section */}
        <div className="flex-1 p-2">
          <p className="md:text-[17px] text-[15px] font-bold">CEO</p>
          <p className="md:text-[17px] text-[15px] font-medium">Joohyun Kim</p>
        </div>

        {/* Business Registration Section */}
        <div className="flex-1 p-2">
          <h2 className="md:text-[18px] text-[15px] font-bold">
            Business registration number CIN
          </h2>
          <h3 className="md:text-[17px] text-[15px] font-medium">427-86-01187</h3>
          <h2 className="text-[17px] text-[15px] font-medium">U74110DL2016PTC290812</h2>
        </div>

        {/* Address Section */}
        <div className="flex-1 p-2">
          <h2 className="md:text-[17px] text-[15px]  font-bold">ADDRESS</h2>
          <h3 className="text-[16px] font-medium">
            Room 238, Basement 1, 479 Gangnam-daero, Seoul
          </h3>
          <h2 className="text-[16px] font-medium">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
            110053 India
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
