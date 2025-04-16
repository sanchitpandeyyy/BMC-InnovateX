import { LeftDots, RightDots } from "@/components/custom/Dots";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroLander = () => {
  return (
    <div className="h-[45rem] min-h-[40rem] lg:h-screen bg-[#008FAD] relative overflow-hidden">
      <div className="z-10 flex flex-col gap-14 md:gap-12 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 items-center justify-center text-center">
          <h1 className="text-xl md:text-3xl lg:text-[30px] text-white font-medium">
            NATIONAL LEVEL HACKATHON
          </h1>
          <div className="w-[100vw] ">
            <svg
              className="h-[4rem] md:h-[unset] svg-x w-full flex justify-center items-center "
              width="100%"
              height="100%"
            >
              <pattern className="svg-stuff"></pattern>
              <text
                x="50%"
                y="70%"
                color="white"
                textAnchor="middle"
                fontSize="30"
                className="text-[40px]  md:text-[70px] lg:text-[90px] py-20 font-extrabold text-white"
                fill="white"
                dominantBaseline="end"
              >
                BMC Innovate
                <tspan className="animated-text">X</tspan>{" "}
              </text>
            </svg>
          </div>
          <h1 className="text-white text-xl md:text-3xl lg:text-[30px] font-medium text-center">
            Think Big, Innovate Bigger
          </h1>
        </div>

        <Link href="https://forms.gle/aEWGMtuE9ukRQHtv7" target="_blank">
          <button
            className="border-2 border-white text-lg  py-2 px-6 transition-all duration-300 ease-in-out cursor-pointer 
  bg-white text-[#008FAD] hover:scale-105 rounded-md hover:shadow-lg shadow-md"
          >
            Register Now
          </button>
        </Link>
        {/* <button
          className="border-2 border-white text-lg  py-2 px-6 transition-all duration-300 ease-in-out  bg-gray-100 text-[#008FAD] rounded-md shadow-md"
          disabled
        >
          Registration Opening Soon
        </button> */}
      </div>

      {/* Background Images */}
      <div className="absolute bottom-18 left-15 hidden md:block">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect1_gomv4w.png"
          }
          alt="mascot"
          width={520}
          height={100}
        />
      </div>
      <div className="absolute bottom-40 left-[-140px] md:hidden">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect1_gomv4w.png"
          }
          alt="mascot"
          width={350}
          height={100}
        />
      </div>
      <div className="absolute bottom-0 left-[39%] hidden md:block">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect2_jxg4iu.png"
          }
          alt="mascot"
          width={500}
          height={175}
        />
      </div>
      <div className="absolute bottom-71 right-[26%] hidden md:block">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect3_h6gjvc.png"
          }
          alt="mascot"
          width={350}
          height={100}
        />
      </div>
      <div className="absolute bottom-0 right-0   md:bottom-20 md:right-0  md:block">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/roundedrect4_nmwu5q.png"
          }
          alt="mascot"
          width={500}
          height={175}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src={
            "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566659/mascot_to157e.png"
          }
          alt="mascot"
          width={350}
          height={350}
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 left-10 md:bottom-12 md:left-16  ">
        <LeftDots />
      </div>
      <div className="absolute  top-[15%] right-2 p-2 md:p-0 md:bottom-[65%] md:right-25  ">
        <RightDots />
      </div>
    </div>
  );
};

export default HeroLander;
