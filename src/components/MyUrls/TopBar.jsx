import React from 'react';

const TopBar = ({openModal}) => {
    return (
        <div className='flex justify-between px-6'>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>My Urls</h1>
                <p className='text-gray-500'>Manage and track all your shortened links.</p>
            </div>
            <div>
                <button className='bg-violet-700 text-white font-semibold text-center px-6 py-2 rounded-lg cursor-pointer'
                    onClick={openModal}><i className="ri-add-large-line"></i> Create New Link</button>
            </div>
        </div>
    );
}

export default TopBar;
