import { useEffect, useState } from 'react';
import {  getSummaryOverall, getTopLinks } from '../api/dashboardApi';
import { useOutletContext } from 'react-router-dom';
import { deleteShortUrl } from '../api/urlApi';
import TopBar from '../components/MyUrls/TopBar';
import SummaryBar from '../components/MyUrls/SummaryBar';
import TopLinkBar from '../components/MyUrls/TopLinkBar';

const MyUrls = () => {
    const [totalLinks, setTotalLinks] = useState(0);
    const [uniqueLinks, setUniqueLinks] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0);
    const [avgClicks, setAvgClicks] = useState(0);
    const [topLinks, setTopLinks] = useState([]);
    const { openModal } = useOutletContext();
    const [deletingShortCode, setDeletingShortCode] = useState(null);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const onDeleteHandler = async (shortCode) => {
        try {

            setDeletingShortCode(shortCode);

            await deleteShortUrl(shortCode);

            setLinks(prevLinks =>
                prevLinks.filter(link => link.shortCode !== shortCode)
            );

            setSuccess("URL deleted successfully");

            console.log("deleted");

        } catch (error) {
            setError("Failed to delete URL");
        } finally {
            setDeletingShortCode(null);
        }
    }

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                console.log("use Effect started");

                const response = await getSummaryOverall();
                const responseList = await getTopLinks();

                const data = response.data;
                const dataList = responseList.data;
                
                console.log(data);
                console.log(dataList);

                setTotalLinks(data.totalLinks);
                setUniqueLinks(data.uniqueClicks);
                setTotalClicks(data.totalClicks);
                setAvgClicks(data.averageClicks.toFixed(2))

                setTopLinks(dataList);


                console.log("use Effect end");
            } catch (error) {
                console.error("Dashboard API error:", error);
            }
        };

        fetchSummary();
    }, []);

    return (
        <div className='w-full h-full px-6 py-12 flex flex-col gap-4'>
            {/* top bar */}
            <TopBar openModal={openModal}/>
            {/* summary bar */}
            <SummaryBar totalLinks={totalLinks} totalClicks={totalClicks} uniqueLinks={uniqueLinks} avgClicks={avgClicks}/>
            {/* search bar */}
            {/* <div className='w-full p-2 flex justify-start gap-4 px-8'>
                <div className='w-2/3'>
                    <input type="text" name="" placeholder='Search by url...' id=""
                        className='border border-gray-400 py-2 px-4 rounded-lg w-full' />
                </div>

                <div className=''>
                    <button className='px-6 py-2 bg-black text-white rounded-2xl font-bold cursor-pointer'>Search</button>
                </div>
            </div> */}
            {/* search results */}
            {/* <div className='w-full pt-2'>
                <div className='w-full flex justify-between px-8 py-4 font-semibold bg-gray-200 rounded-t-xl border border-gray-300'>
                    <h4>Original URL</h4>
                    <h4>Short Link</h4>
                    <h4>Clicks</h4>
                    <h4>Created</h4>
                    <h4>Actions</h4>
                </div>
                {topLinks.map((link) => <TopLinkCard linkData={link}/>)}
            </div> */}
            {/* <div className="w-full pt-2"> */}

                {/* Header */}
                {/* <div className="grid grid-cols-[2fr_1fr_0.5fr_1fr_0.8fr] gap-4 px-8 py-4 font-semibold bg-gray-200 rounded-t-xl border border-gray-300">
                    <h4>Original URL</h4>
                    <h4>Short Link</h4>
                    <h4>Clicks</h4>
                    <h4>Created</h4>
                    <h4>Actions</h4>
                </div> */}

                {/* Rows */}
                {/* {topLinks.map((link, idx) => (
                    <TopLinkCard
                        onDeleteHandler={onDeleteHandler}
                        key={idx}
                        linkData={link}
                    />
                ))} */}

            {/* </div> */}
            <TopLinkBar topLinks={topLinks} onDeleteHandler={onDeleteHandler}/>
            {/* search summary */}
            {/* <div className='flex justify-between px-6'>
                <p>Showing 1 to 3 of 1236 results</p>
                <p><i class="ri-arrow-left-s-line"></i> 1 2 3 ... 26 <i class="ri-arrow-right-s-line"></i></p>
            </div> */}
        </div>
    );
}

export default MyUrls;
