import React from "react";
import { FaArrowRightToBracket  } from "react-icons/fa6";

const experience = [
  {
    period: "December 2025 - Present",
    details: {
      title: "Microelectronics IPT Lead",
      company: "Orion Edge Group",
      link: "https://orionedgegroup.com/",
      description: `Lead of the Microelectronics Integrated Product Team, overseeing PCB, firmware, and system-level hardware development, 
      with cross-functional collaboration with RF engineering team on mixed-signal design.`,
    },
  },
  {
    period: "August 2023 - Present",
    details: {
      title: "Graduate Research Assistant",
      company: "Interface Research Lab",
      link: "https://cse.usf.edu/~rkaram/",
      description: `Conduct research in hardware security, AI acceleration for resource constrained devices, and wearable medical devices. 
      Developed novel hardware and algorithms to enable secure, efficient, and intelligent embedded systems. 
      Contributed to multiple publications and collaborative research efforts within these domains.`,
    },
  },
];

function Experience() {
  return (
    <div id="experience" className="bg-white py-10 px-6 h-screen snap-start snap-always md:pt-48">
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
        <h1 className="text-left md:text-lg mb-8 md:mb-0 md:mr-8 font-medium md:w-1/4 uppercase">
          Experience
        </h1>

        <div className="relative md:w-3/4 overflow-visible">

          {experience.map((job, index) => (
            <div key={index} className="relative mb-12">
              <p className="md:text-base text-sm text-gray-600 mb-2">{job.period}</p>

              <div className="flex flex-wrap items-center">
                <h2 className="font-medium mr-2 mb-2">
                  {job.details.title} @{" "}
                  <a
                    href={job.details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-medium  inline-flex items-center text-black no-underline"
                  >
                    {job.details.company}
                    <FaArrowRightToBracket 
                      size={14}
                      className="text-black ml-2"
                    />
                  </a>
                </h2>
              </div>

              <p className="text-base">{job.details.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
