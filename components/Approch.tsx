"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Approch = () => {
  return (
    <section className=" w-full py-20 ">
        <h1 className="heading">
            My {''}
            <span className="text-purple" >
                approch
            </span>
        </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card title="Planing & Strategy"
        description=" Planning and strategy is the first phase of the project. It is the most important phase of the project"
        icon={<AceternityIcon 
        order="Phase 1" 
         />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            dotSize={3}
          />
        </Card>
        <Card title="Developement & Progress Update"
        description=" Development and progress update is the second phase of the project. It is the most important phase of the project"
         icon={<AceternityIcon order="Phase 2" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black-100"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={3}
          />
          {/* Radial gradient for the cute fade */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card title="Development & Launch"
        description=" Development and launch is the third phase of the project. It is the most important phase of the project"
         icon={<AceternityIcon order="Phase 3" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            dotSize={3}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] rounded-3xl group/canvas-card flex items-center
       justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] text-center
         group-hover/canvas-card:-translate-y-[-50%] group-hover/canvas-card:opacity-0
          transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100
        relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white
          group-hover/canvas-card:-translate-y-2 transition duration-200 text-center  "
          >
          {title}
        </h2>
        <h2 
        className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10
         text-black mt-4 font-medium group-hover/canvas-card:text-white
          group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{color:"#e4ecff"}}
          >
          {description}
        </h2>
        
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order: string}) => {
  return (
    <div>
        
        <button className="inline-flex h-12 animate-shimmer items-center
         justify-center rounded-md border border-neutral-950
          bg-[linear-gradient(110deg,#03001e,45%,#1e2631,55%,#03001e)] bg-[length:200%_100%]
           px-6 py-2 text-slate-400 transition-colors focus:outline-none focus:ring-1
            focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-2xl font-bold"
            >
          {order}
        </button>
      
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};


export default Approch