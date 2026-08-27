import React from 'react';

const OverviewBar = ({totalClicks, uniqueClicks,}) => {
    return (
        <div className='flex w-full gap-4 justify-around mt-4'>
            <div className='w-1/5 border px-6 py-4 rounded-2xl border-gray-400'>
                <p className='text-gray-700'>Total Clicks</p>
                <div className='w-full flex justify-between'>
                    <h1 className='text-2xl font-bold'>{totalClicks}</h1>
                    <p className='text-green-600 font-semibold'>+12.5%</p>
                </div>
            </div>
            <div className='w-1/5 border px-6 py-4 rounded-2xl border-gray-400'>
                <p className='text-gray-700'>Unique Clicks</p>
                <div className='w-full flex justify-between'>
                    <h1 className='text-2xl font-bold'>{uniqueClicks}</h1>
                    <p className='text-red-600 font-semibold'>-12.5%</p>
                </div>
            </div>
            <div className='w-1/5 border px-6 py-4 rounded-2xl border-gray-400'>
                <p className='text-gray-700'>Countries</p>
                <h1 className='text-2xl font-bold'>12</h1>
            </div>
            <div className='w-1/5 border px-6 py-4 rounded-2xl border-gray-400'>
                <p className='text-gray-700'>Devices</p>
                <h1 className='text-2xl font-bold'>33.2</h1>
            </div>
        </div>
    );
}

export default OverviewBar;
