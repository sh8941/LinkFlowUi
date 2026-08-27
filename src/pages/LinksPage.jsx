
import { useEffect, useState } from 'react';
import { myUrls } from '../api/urlApi';
import { deleteShortUrl } from '../api/urlApi';
import Loading from '../components/Loading';
import ErrorState from '../components/ErrorState';
import EmptyState from '../components/EmptyState';
import { toast } from 'react-toastify';
const LinksPage = () => {

    const [links, setLinks] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [deletingShortCode, setDeletingShortCode] = useState(null);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [pageLoading, setPageLoading] = useState(true);
    const [pageError, setPageError] = useState(null);

    const deleteHandler = async (shortCode) => {
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

        const fetchMyUrls = async () => {
            try {

                setPageLoading(true);
                setPageError(null);

                const data = await myUrls(page, 10);
                console.log(data);

                setLinks(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                setPageError("Unable to load your URLs.");
            } finally {
                setPageLoading(false);
            }
        };

        fetchMyUrls();

    }, [page]);

    if (pageLoading) {
        return <Loading/>;
    }

    if (pageError) {
        return <ErrorState message={error} />;
    }

    if (links.length === 0) {
        return <EmptyState />;
    }


    return (
        <div>
            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}
            <div className="w-full overflow-auto">
                <table className="w-full min-w-200 border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="px-4 py-3 text-left">Short Code</th>
                            <th className="px-4 py-3 text-left">Original URL</th>
                            <th className="px-4 py-3 text-left">Clicks</th>
                            <th className="px-4 py-3 text-left">Created At</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {links.map((link) => (
                            <tr key={link.shortCode} className="border-b">
                                <td className="px-4 py-3">
                                    {link.shortCode}
                                </td>

                                <td className="px-4 py-3 max-w-75 truncate">
                                    {link.originalUrl}
                                </td>

                                <td className="px-4 py-3">
                                    {link.clickCount}
                                </td>

                                <td className="px-4 py-3 whitespace-nowrap">
                                    {new Date(link.createdAt).toLocaleString("en-IN", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </td>

                                <td className="px-4 py-3 flex gap-4 text-xl">
                                    <button className="text-gray-400 rounded cursor-pointer" onClick={() => { navigator.clipboard.writeText("http://localhost:8080/go/" + link.shortCode);}}>
                                        <i className="ri-file-copy-line"></i>
                                    </button>
                                    <button className="text-red-700 rounded cursor-pointer" onClick={() => { deleteHandler(link.shortCode)}}
                                        disabled={deletingShortCode == link.shortCode}>
                                        <i className="ri-delete-bin-6-line"></i>
                                        {deletingShortCode === link.shortCode ? "Deleting..." : ""}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">

                <button
                    disabled={page === 0}
                    onClick={() => setPage(page - 1)}
                    className='bg-violet-700 py-2 px-6 text-white font-semibold rounded-lg cursor-pointer'
                >
                    Previous
                </button>

                <span>
                    Page {page + 1} of {totalPages}
                </span>

                <button
                    disabled={page === totalPages - 1}
                    onClick={() => setPage(page + 1)}
                    className='bg-violet-700 py-2 px-6 text-white font-semibold rounded-lg cursor-pointer'
                >
                    Next
                </button>

            </div>
        </div>
    );
}

export default LinksPage;

