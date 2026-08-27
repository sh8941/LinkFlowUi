import React from 'react';
import ClicksChart from '../ClicksChart';

const ClickGraph = ({startDate, endDate}) => {
    return (
        <div className='w-full h-1/3 rounded-lg px-6 py-4'>
            <div className='w-full h-full border border-gray-300 rounded-lg'>
                <ClicksChart startDate={startDate} endDate={endDate} />
            </div>
        </div>
    );
}

export default ClickGraph;
