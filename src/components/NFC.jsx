import React from 'react';
import PCBViewer from './PCBViewer';
import { useNavigate } from 'react-router-dom';

function NFCPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full flex items-center h-2/5 md:h-[600px]">
                <PCBViewer 
                    objPath="/assets/projects/NFC.obj" 
                    mtlPath="/assets/projects/NFC.mtl" 
                    pos_x={0} 
                    pos_y={0} 
                    pos_z={12} 
                    zoom={1} 
                />
            </div>
            <div className="text-center mt-4">
                <p className="md:text-lg text-black mb-4">Hi there! If you're seeing this, you most likely scanned my PCB business card.</p>
                <p className="md:text-lg text-black mb-8">Thanks for checking out my work!</p>
                <button 
                    className="px-6 py-3 bg-black text-white font-medium rounded-md transition" 
                    onClick={() => navigate('/')}
                >
                    Continue to Main Site
                </button>
            </div>
        </div>
    );
}

export default NFCPage;
