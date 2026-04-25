import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const papers = [
  {
    title: 'Malware Detection in Embedded Devices Using Artificial Hardware Immunity',
    authors: 'Farhath Zareen, Ahmed Ghoneim, Mateus A. Fernandes, Samir Ahmed, Robert Karam',
    venue: 'Journal of Hardware and Systems Security, Springer Nature',
    year: '2025',
    doi: 'https://link.springer.com/article/10.1007/s41635-025-00166-w',
  },
  {
    title: 'Emerging Trends in Security-by-Design for Implantable Medical Devices',
    authors: 'Samir Ahmed, Robert Karam',
    venue: 'IFIP/IEEE International Conference on Very Large Scale Integration',
    year: '2024',
    doi: 'https://vlsisoc2024.nl/',
  },
  {
    title: 'Modular Security Evaluation Platform for Physiological Closed-Loop Control Systems',
    authors: 'Samir Ahmed, Shakil Mahmud, Robert Karam',
    venue: 'In Proceedings of the Great Lakes Symposium on VLSI',
    year: '2024',
    doi: 'https://doi.org/10.1145/3649476.3660362',
  },
  {
    title: 'PEP: Hardware Emulation Platform for Physiological Closed-Loop Control Systems',
    authors: 'Shakil Mahmud, Samir Ahmed, Robert Karam',
    venue: 'IFIP International Internet of Things (IoT) Conference',
    year: '2023',
    doi: 'https://doi.org/10.1007/978-3-031-45882-8_30',
  },
  {
    title: 'FAMID: False Alarms Mitigation in IoMT Devices',
    authors: 'Shakil Mahmud, Myles Keller, Samir Ahmed, Robert Karam',
    venue: 'IFIP International Internet of Things (IoT) Conference',
    year: '2023',
    doi: 'https://doi.org/10.1007/978-3-031-45878-1_14',
  },
];

const PaperItem = ({ paper }) => (
  <div className="mb-10">
    <h2 className="font-medium md:text-lg">{paper.title}</h2>

    <p
      className="text-base text-gray-600 mb-2"
      dangerouslySetInnerHTML={{
        __html: paper.authors.replace(
          /Samir Ahmed/g,
          '<span class="underline underline-offset-2 decoration-gray-500">Samir Ahmed</span>'
        ),
      }}
    />

    <p className="text-base text-gray-800">
      {paper.doi ? (
        <a
          href={paper.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black no-underline hover:text-black"
        >
          {paper.venue}, {paper.year}
          <MdArrowOutward
            size={18}
            className="inline-block align-text-top ml-2 translate-y-[+1px]"
          />
        </a>
      ) : (
        <span>
          {paper.venue}, {paper.year}
        </span>
      )}
    </p>
  </div>
);

function Research() {
  return (
    <div id="research" className="bg-white py-10 px-6 h-screen snap-start snap-always md:pt-48">
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
        <h1 className="text-left uppercase mb-8 md:mb-0 md:mr-8 font-medium md:w-1/4 md:text-lg">
          Research
        </h1>

        <div className="flex flex-col md:w-3/4">
          {papers.map((paper, index) => (
            <PaperItem key={index} paper={paper} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Research;