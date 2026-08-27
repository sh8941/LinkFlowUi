import React from 'react';

const SummaryBar = ({totalLinks, totalClicks, uniqueLinks, avgClicks}) => {
    return (
        <div className='flex w-full gap-4 justify-around mt-4'>
            <div className='w-1/5 border px-6 py-4 rounded-2xl border-gray-400'>
                <p className='text-gray-700'>Total Links</p>
                <h1 className='text-2xl font-bold'>{totalLinks}</h1>
            </div>
            <div className='w-1/5 border px-6 py-4 rounded-2xl border-gray-400'>
                <p className='text-gray-700'>Total Clicks</p>
                <h1 className='text-2xl font-bold'>{totalClicks}</h1>
            </div>
            <div className='w-1/5 border px-6 py-4 rounded-2xl border-gray-400'>
                <p className='text-gray-700'>Unique Clicks</p>
                <h1 className='text-2xl font-bold'>{uniqueLinks}</h1>
            </div>
            <div className='w-1/5 border px-6 py-4 rounded-2xl border-gray-400'>
                <p className='text-gray-700'>Avg Click/Link</p>
                <h1 className='text-2xl font-bold'>{avgClicks}</h1>
            </div>
        </div>
    );
}

export default SummaryBar;
