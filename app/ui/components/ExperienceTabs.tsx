"use client";

import { useState } from "react";
import { workExperience } from "../utils/workExperience";
import Link from "next/link";
import useScreenWidth from "../hooks/useScreenWidth";
import MainSkills from "./MainSkills";

export default function ExperienceTabs() {
  // DEVICE
  const device = useScreenWidth();

  // STATES
  const [activeWork, setActiveWork] = useState<string>(
    workExperience[0].company
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // METHODS
  const handleTabChange = (company: string, index: number) => {
    setActiveWork(company);
    setActiveIndex(index);
  };

  // JSX
  return (
    <div className="w-full px-4 md:px-0 max-w-[768px] min-h-[400px] lg:min-h-[470px] sm:min-h-[auto] mx-auto flex sm:flex-col justify-center gap-3 md:gap-2">
      {/* TABS */}
      <div className="sm:overflow-x-auto experience-tabs-scrollbar">
        <ul className="relative flex flex-col sm:flex-row list-none m-0 p-0">
          {workExperience.map((work, index) => {
            return (
              <li
                key={work.company}
                className={`flex items-center h-10 sm:h-[auto] sm:min-w-[170px] sm:justify-center px-5 md:px-3 py-2 cursor-pointer text-nowrap border-l-[2px] sm:border-l-0 sm:border-b-[2px] transition-all border-white font-bold hover:bg-sixthColorOpacity hover:text-thirdColor ${
                  activeWork === work.company ? "text-thirdColor" : "text-white"
                }`}
                onClick={() => handleTabChange(work.company, index)}
              >
                {work.company}
              </li>
            );
          })}
          <div
            className={`absolute left-0 w-[2px] sm:w-[170px] h-10 sm:h-[2px] sm:bottom-0 bg-thirdColor transition-transform duration-300`}
            style={{
              transform:
                device === "phone"
                  ? `translateX(${activeIndex * 170}px)`
                  : `translateY(${activeIndex * 40}px)`,
            }}
          />
        </ul>
      </div>

      {/* WORK INFORMATION */}
      <div className="flex-1 flex -flex-col sm:min-h-[470px]">
        {workExperience.map((work) => {
          return (
            <div
              key={work.company}
              className={`w-full px-2 ${
                activeWork === work.company
                  ? "block experience-animation"
                  : "hidden"
              }`}
            >
              <h3 className="flex sm:flex-col gap-1 sm:gap-0 text-xl  font-semibold text-nowrap">
                <span className="text-fourthColor">{work.rolePosition}</span>
                <span className="flex items-center gap-1 text-thirdColor">
                  @
                  <Link
                    href={work.webSite}
                    target="_blank"
                    className="relative text-hover-underline"
                  >
                    {work.company}
                  </Link>
                </span>
              </h3>
              <p className="w-full mb-6 mt-1 text-sm text-white">
                {work.period}
              </p>
              <ul>
                {work.functions.map((func, index) => {
                  return (
                    <li
                      key={index}
                      className="relative pl-5 sm:pl-4 mb-3 text-base sm:text-sm sm:leading-normal text-white before:content-['▹'] before:absolute before:left-0 before:top-0 before:text-thirdColor"
                    >
                      {func}
                    </li>
                  );
                })}
              </ul>
              <MainSkills
                skillsAdquire={work.skillsAdquire}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
