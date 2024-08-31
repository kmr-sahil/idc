"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Camera, MapPinSimple } from "@phosphor-icons/react";
import Link from "next/link";

const ImagePage = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col gap-[1rem] justify-center items-center bg-[#2D2727]">
      <motion.div
        onClick={() => setIsClicked(!isClicked)}
        initial={{scale: 1}}
        animate={isClicked ? { scale: 1.025 } : { scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="relative rounded-[1rem] w-[18rem] overflow-hidden cursor-pointer"
      >
        <motion.img
          src="/contest.avif"
          initial={{scale: 1.05}}
          animate={isClicked ? { scale: 1.075 } : { scale: 1.05 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="w-full h-auto"
        />

        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ bottom: "-8rem" }}
              animate={{ bottom: "0.5rem" }}
              exit={{ bottom: "-8rem" }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="absolute left-1/2 bottom-[0.5rem] transform -translate-x-1/2 rounded-[14px] p-[1rem] w-[17rem] flex flex-col gap-[0.5rem] justify-start items-start bg-black bg-opacity-70 backdrop-blur-xl"
            >
              <div className="flex flex-col">
                <h3 className="text-[14px] text-slate-50">Grigorii Shcheglov</h3>
                <span className="text-[11px] text-[#9F9FAD]">
                  @shegiva on Unsplash
                </span>
              </div>
              <div className="w-[100%] bg-[#4D4242] h-[1px]"></div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#9F9FAD] flex justify-start items-center gap-[0.25rem]">
                  <MapPinSimple size={10} weight="fill" />
                  Bogliasco, Italy
                </span>
                <span className="text-[10px] text-[#9F9FAD] flex justify-start items-center gap-[0.25rem]">
                  <Camera size={10} weight="fill" />
                  FUJIFILM, X-T30 II
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <span className="text-[12px] text-[#9F9FAD] font-mono font-thin "><Link href={"https://x.com/kr_sahil/status/1829748628212367421"} className="flex items-center">support<ArrowUpRight size={10} /></Link></span>
    </div>
  );
};

export default ImagePage;