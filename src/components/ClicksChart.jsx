import { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { myUrlClicks } from '../api/urlApi';

const ClicksChart = ({ startDate, endDate }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

    const fetchClicks = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await myUrlClicks(startDate, endDate);

            const clicks = response.data;

            // Create every date in the range with 0 clicks
            const clickCountByDate = new Map();

            const currentDate = new Date(startDate);
            const lastDate = new Date(endDate);

            while (currentDate <= lastDate) {
                const date = currentDate.toISOString().split('T')[0];

                clickCountByDate.set(date, 0);

                currentDate.setDate(currentDate.getDate() + 1);
            }

            // Add actual clicks
            clicks.forEach(click => {

                const date = new Date(click.clickedAt)
                    .toISOString()
                    .split('T')[0];

                clickCountByDate.set(
                    date,
                    (clickCountByDate.get(date) || 0) + 1
                );
            });

            // Convert Map to chart data
            const chartData = Array.from(
                clickCountByDate,
                ([date, clicks]) => ({
                    date,
                    clicks
                })
            );

            setData(chartData);

        } catch (err) {

            console.error('Failed to fetch clicks:', err);

            setError('Failed to load click analytics.');

        } finally {

            setLoading(false);

        }
    };

    fetchClicks();

}, [startDate, endDate]);


    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">
                    Loading analytics...
                </p>
            </div>
        );
    }


    if (error) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-red-500">
                    {error}
                </p>
            </div>
        );
    }


    if (data.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">
                    No click data available.
                </p>
            </div>
        );
    }


    return (
        <div className="w-full h-full p-4">

            <ResponsiveContainer width="100%" height="100%">

                <LineChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 0,
                        bottom: 10
                    }}
                >

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 12 }}
                    />

                    <YAxis
                        allowDecimals={false}
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="clicks"
                        stroke="#7c3aed"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
};

export default ClicksChart;