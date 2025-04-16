import React from 'react';

import PEPHS from '/assets/research/GLSVLSI_2024_Modular_Security_Evaluation_Platform_for_PCLCS__Camera_Ready_.pdf';
import PEP from '/assets/research/IFIP_2023_Research_Demo__PCLC_Emulation_Platform__Camera_Ready_.pdf';
import FAMID from '/assets/research/IFIP_2023__False_Alarms_Mitigation_in_IoMT_Devices__Camera_Ready_.pdf';

function Research() {
    return (
        <div id="research" className="bg-gray-100  py-10 px-6">
            <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
                <h1 className="text-left uppercase mb-8 md:mb-0 md:mr-8 font-medium md:w-1/4 md:text-lg">
                    Research
                </h1>
                <div className="flex flex-col md:w-3/4">
                    <div className="mb-10">
                        <h2 className="font-medium md:text-lg">Machine Learning on the Edge: Challenges and Techniques for On-Device Learning</h2>
                        <p className="text-base text-gray-600 mb-2">Samir Ahmed, Robert Karam</p>
                        <p className="text-base">IBM IEEE CAS/EDS – AI Compute Symposium (Poster Session), 2024</p>
                    </div>
                    <div className="mb-10">
                        <h2 className="font-medium md:text-lg">Modular Security Evaluation Platform for Physiological Closed-Loop Control Systems</h2>
                        <p className="text-base text-gray-600 mb-2">Samir Ahmed, Shakil Mahmud, Robert Karam</p>
                        <p className="text-base">In Proceedings of the Great Lakes Symposium on VLSI, 2024</p>
                        <div className="flex mt-1 space-x-4">
                            <a href={PEPHS} target="_blank" rel="noopener noreferrer">
                                <button className="bg-black text-white py-0.5 px-2 rounded text-xs">
                                    PDF
                                </button>
                            </a>
                            <a href="https://doi.org/10.1145/3649476.3660362" target="_blank" rel="noopener noreferrer">
                                <button className="bg-black text-white py-0.5 px-2 rounded text-xs">
                                    DOI
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="font-medium md:text-lg">PEP: Hardware Emulation Platform for Physiological Closed-Loop Control Systems</h2>
                        <p className="text-base text-gray-600 mb-2">Shakil Mahmud, Samir Ahmed, Robert Karam</p>
                        <p className="text-base">IFIP International Internet of Things (IoT) Conference, 2023</p>
                        <div className="flex mt-1 space-x-4">
                            <a href={PEP} target="_blank" rel="noopener noreferrer">
                                <button className="bg-black text-white py-0.5 px-2 rounded text-xs">
                                    PDF
                                </button>
                            </a>
                            <a href="https://doi.org/10.1007/978-3-031-45882-8_30" target="_blank" rel="noopener noreferrer">
                                <button className="bg-black text-white py-0.5 px-2 rounded text-xs">
                                    DOI
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="font-medium md:text-lg">FAMID: False Alarms Mitigation in IoMT Devices</h2>
                        <p className="text-base text-gray-600 mb-2">Shakil Mahmud, Myles Keller, Samir Ahmed, Robert Karam</p>
                        <p className="text-base">IFIP International Internet of Things (IoT) Conference, 2023</p>
                        <div className="flex mt-1 space-x-4">
                            <a href={FAMID} target="_blank" rel="noopener noreferrer">
                                <button className="bg-black text-white py-0.5 px-2 rounded text-xs">
                                    PDF
                                </button>
                            </a>
                            <a href="https://doi.org/10.1007/978-3-031-45878-1_14" target="_blank" rel="noopener noreferrer">
                                <button className="bg-black text-white py-0.5 px-2 rounded text-xs">
                                    DOI
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Research;