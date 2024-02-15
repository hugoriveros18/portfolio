/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from "react";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import useScreenWidth from "../hooks/useScreenWidth";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { visibilityOptionsDesktopTablet, visibilityOptionsPhone } from "../utils/sectionsVisibilityOptions";
import { personalProjects } from "../utils/projectsInfo";
import { GithubIconProjects, PreviewIconProjects } from "../components/SocialMediaIcons";

export default function Projects() {

    // DEVICE
    const device = useScreenWidth()

    // REFERENCES
    const projectsRef = useRef<any>(null);

    // IS VISIBLE ON SCREEN
    const isVisible = useElementOnScreen({
        options: device === 'phone' ? visibilityOptionsPhone : visibilityOptionsDesktopTablet,
        containerRef: projectsRef
    });

    // JSX
    return (
        <div 
            className={`py-[100px] sm:py-[50px] opacity-0 ${isVisible ? 'block-fade-in-section' : undefined}`}
            ref={projectsRef}
        >
            <SectionTitle
                numeration="03."
                title="Main Projects"
                isReversed={false}
            />
            <ul>
                {
                    personalProjects.map((project) => {
                        return (
                            <ProjectItem 
                                key={project.title}
                                type={project.type}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                githubRepo={project.githubRepo}
                                previewImage={project.previewImage}
                                webUrl={project.webUrl}
                                orientation='left'
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

type Orientation = 'left' | 'right';

interface ProjectItemProps extends Project {
    orientation: Orientation
}

function ProjectItem({
    type,
    title,
    description,
    technologies,
    githubRepo,
    previewImage,
    webUrl,
    orientation
}:ProjectItemProps) {


    // JSX
    return (
        <li className="relative grid gap-3 grid-cols-12 items-center">
            {/* INFO */}
            <div className="relative h-full row-span-full col-start-7 lg:col-start-5 sm:col-span-full col-end-13 py-4 lg:py-0 sm:p-6 flex items-center z-10">
                <div className="flex flex-col items-end sm:items-start">
                    <p className="py-2 text-fourthColor text-sm">
                        {type}
                    </p>
                    <h3 className="text-3xl lg:text-2xl text-white font-bold pb-3">
                        {title}
                    </h3>
                    <div className="p-6 sm:py-5 sm:px-0 rounded-lg project-description">
                        <p className="text-sixthColor text-end sm:text-start text-lg lg:text-base sm:text-lg md:text-sm">
                            {description}
                        </p>
                    </div>
                    <ul className="flex flex-wrap justify-end sm:justify-start mt-6 sm:mt-3 list-none p-0">
                        {
                            technologies.map(tech => {
                                return (
                                    <li
                                        key={tech}
                                        className="mb-2 ml-5 lg:ml-3 sm:mr-3 sm:ml-0 text-sm text-sixthColor whitespace-nowrap"
                                    >
                                        {tech}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="flex items-center justify-end gap-[10px] sm:gap-5 mt-2">
                        <GithubIconProjects slug={githubRepo} />
                        <PreviewIconProjects slug={webUrl} />
                    </div>
                </div>
            </div>

            {/* IMAGE */}
            <Link
                href={webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full row-span-full col-start-1 col-end-8 lg:col-end-9 sm:col-span-full rounded-xl sm:rounded-sm overflow-hidden lg:py-4 sm:py-0 z-3"
            >
                <div className="project-image">
                        <img
                            alt="Project image"
                            src={previewImage}
                            className="w-full h-full sm:object-cover"
                        />
                </div>
            </Link>
        </li>
    )
}
