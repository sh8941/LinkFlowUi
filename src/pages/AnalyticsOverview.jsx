import { getSummary, getTopLinks } from '../api/dashboardApi';
import AnalyticsSummaryBar from '../components/Analytics/AnalyticsSummaryBar';
import AnalyticsTopBar from '../components/Analytics/AnalyticsTopBar';
import ClickGraph from '../components/Analytics/ClickGraph';
import OverviewBar from '../components/Analytics/OverviewBar';
import { useEffect, useState } from "react";

const AnalyticsOverview = () => {


    const date = new Date();
    const today = date.toISOString().split('T')[0];
    date.setDate(date.getDate() - 7); // Subtracts 7 days (handles month/year rollbacks automatically)
    const oneWeekAgo = date.toISOString().split('T')[0];

    const [startDate, setStartDate] = useState(oneWeekAgo);
    const [endDate, setEndDate] = useState(today);
    const [totalClicks, setTotalClicks] = useState(0);
    const [uniqueClicks, setUniqueClicks] = useState(0);
    const [topLinks, setTopLinks] = useState([]);

    useEffect(
        () => {

            const fetchSummary = async () => {
                const response = await getSummary(startDate, endDate);
                console.log('fething summaray between dates in analyticsoveriew');
                
                const data = response.data;
                console.log(response);
                console.log(data);
                console.log('fetched summaray between dates in analyticsoveriew');
                setTotalClicks(data.totalClicks);
                setUniqueClicks(data.uniqueClicks);

                const response2 = await getTopLinks();
                const data2 = response2.data;
                console.log(data2);
                setTopLinks(data2);

            }

            fetchSummary();

        }
        , [startDate, endDate]);

    return (
        <div className='h-full w-full'>
            {/* top bar */}
            <AnalyticsTopBar today={today} startDate={startDate} endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate} />
            {/* overiew bar */}
            <OverviewBar totalClicks={totalClicks} uniqueClicks={uniqueClicks}/>
            {/* clicks graph */}
            <ClickGraph startDate={startDate} endDate={endDate}/>
            {/* summary bar */}
            <AnalyticsSummaryBar topLinks={topLinks}/>
        </div>
    );
}

export default AnalyticsOverview;
