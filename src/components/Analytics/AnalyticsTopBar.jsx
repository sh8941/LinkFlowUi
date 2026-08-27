import React from 'react';

const AnalyticsTopBar = ({startDate, today, endDate, setStartDate, setEndDate}) => {
    return (
        <div className='w-full flex justify-between items-center px-8 py-6'>
            <div>
                <h1 className='font-semibold text-4xl'>Analytics Overview</h1>
                <p className='text-gray-500'>Track performance and gain insights.</p>
            </div>
            <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                    <input
                        type="date"
                        value={startDate}
                        max={today}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2"
                    />

                    <span>to</span>

                    <input
                        type="date"
                        value={endDate}
                        min={startDate}
                        max={today}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>

                <button className="border border-gray-300 rounded-lg p-2">
                    <i className="ri-download-2-line"></i> Export
                </button>
            </div>
        </div>
    );
}

export default AnalyticsTopBar;
