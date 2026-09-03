import React from 'react';
import CountryChart from '../CountryChart';

const AnalyticsSummaryBar = ({topLinks}) => {
    return (
        <div className='w-full h-1/3 px-6 py-4 flex gap-4'>
            <div className='w-1/2 border border-gray-300 rounded-lg px-4'>
                <h2 className='font-bold'>Top Links</h2>
                <div className='w-full flex justify-between items-center border-b border-gray-300'>
                </div>
                <div>
                    <div className='w-full flex justify-between items-center border-b font-semibold border-gray-300'>
                        <p>Links</p>
                        <p>Clicks</p>
                    </div>
                    {topLinks.map(
                        data => <div id='' className='w-full flex justify-between items-center border-b border-gray-300'>
                            <p>{data.shortLink}</p>
                            <p>{data.clicks}</p>
                        </div>
                    )}

                </div>
            </div>

            {/* <div className='w-1/2 border border-gray-300 rounded-lg'>
                <CountryChart />
            </div> */}
        </div>
    );
}

export default AnalyticsSummaryBar;
