'use client';

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "../GridGlobe";
import TechStack from "../TechStack";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { HiOutlineCheck } from "react-icons/hi";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {

  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText("danssoukokouvi@gmail.com");


    setCopied(true);


    // setTimeout(() => {setCopied(false)}, 2000);

  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none \
        justify-between flex flex-col space-y-4 border border-white/[0.1]", className
      )}

      style={{
        background: "rgb(4,7,29)",
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(65,65,101,1) 26%, rgba(0,212,255,1) 100%)'
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full"`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              className={cn(
                imgClassName,"object-center object-cover"
              )}
              alt={img}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              className="object-center object-cover"
              alt={spareImg}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl w-full"/> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col\
          px-5 p-5 lg:p-10 ')}>
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-1">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ">
              {title}
            </div>
          {id === 2 && (<GlobeDemo />)}
          {id === 3 && (<TechStack />)}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* install  react-lottie */}
                <div className="absolute -bottom-5 right-0">
                  
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                    }
                  }} />
                </div>
                <MagicButton
                  title={copied ? "Email copied!" : "Copy my email"}
                  icon={copied ? <HiOutlineCheck /> : <IoCopyOutline />} 
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="bg-[#161a31]"

                 />
            </div>
          )}
      </div>
    </div>
    </div>
  );
};
