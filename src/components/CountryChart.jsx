import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const CountryChart = () => {

    const data = [
        { country: 'India', clicks: 2500 },
        { country: 'USA', clicks: 900 },
        { country: 'UK', clicks: 500 },
        { country: 'Germany', clicks: 300 },
        { country: 'Others', clicks: 250 }
    ];

    const COLORS = [
        '#8b5cf6',
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#9ca3af'
    ];

    return (
        <div className='w-full h-full p-4'>

            <div className='w-full h-full min-h-0 flex items-center'>

                {/* Pie chart */}
                <div className='w-1/2 h-full min-h-0'>
                <div className='font-bold'>Top Countries</div>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>

                            <Pie
                                data={data}
                                dataKey="clicks"
                                nameKey="country"
                                cx="50%"
                                cy="50%"
                                outerRadius="70%"
                                innerRadius="40%"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index]}
                                    />
                                ))}
                            </Pie>

                            <Tooltip />

                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Countries */}
                <div className='w-1/2 flex flex-col gap-3'>

                    {data.map((item, index) => (
                        <div
                            key={item.country}
                            className='flex items-center justify-between'
                        >
                            <div className='flex items-center gap-2 min-w-0'>
                                <span
                                    className='w-3 h-3 shrink-0 rounded-full'
                                    style={{
                                        backgroundColor: COLORS[index]
                                    }}
                                />

                                <span className='text-sm text-gray-700 truncate'>
                                    {item.country}
                                </span>
                            </div>

                            <span className='text-sm font-semibold ml-2'>
                                {item.clicks.toLocaleString()}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default CountryChart;