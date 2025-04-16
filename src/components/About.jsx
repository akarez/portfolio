import React from 'react';

function About() {
    return (
        <div id="about" className="bg-gray-100 py-20 px-6">
            <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
                <h1 className="text-left uppercase mb-8 md:mb-0 md:mr-8 font-medium md:w-1/4 md:text-lg">
                    Who am I
                </h1>
                <div className="flex flex-col md:w-3/4">
                    <p className='mb-6 text-black text-base md:text-justify'>
                        I am a Ph.D. student in the Department of Computer Science and Engineering at the University of South Florida. 
                        My research interests are in the realm of resource constrained devices, such as edge AI and alternative computing.
                        I have experience in embedded systems design, including PCB and FPGA design, bare-metal and RTOS firmware development, 
                        and machine learning for edge devices. I am an active member of IEEE, IEEE-CS, IEEE-HKN, and recipient of the 
                        NSF NRT Fellowship. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;