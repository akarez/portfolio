import Footer from '../components/Footer';

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

function Authors({ authors }) {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
      {authors.split(/(Samir Ahmed)/).map((part, i) =>
        part === 'Samir Ahmed' ? (
          <span key={i} className="underline underline-offset-2 decoration-gray-400 dark:decoration-gray-500">
            Samir Ahmed
          </span>
        ) : part
      )}
    </p>
  );
}

function PaperItem({ paper }) {
  const inner = (
    <>
      <div className="flex justify-between items-baseline gap-4">
        <h2 className="font-medium md:text-base">{paper.title}</h2>
        <span className="text-sm text-gray-400 dark:text-gray-500 shrink-0">{paper.year}</span>
      </div>
      <Authors authors={paper.authors} />
      <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{paper.venue}</p>
    </>
  );

  if (paper.doi) {
    return (
      <a
        href={paper.doi}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-6 border-b border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900 px-4 -mx-4 transition-colors text-black dark:text-white"
      >
        {inner}
      </a>
    );
  }

  return <div className="py-6 border-b border-gray-100 dark:border-zinc-800 px-4 -mx-4">{inner}</div>;
}

export default function ResearchPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black px-10 md:px-24 pt-28 pb-20">
        <div className="max-w-3xl mx-auto w-full border-t border-gray-100 dark:border-zinc-800">
          {papers.map((paper, index) => (
            <PaperItem key={index} paper={paper} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
