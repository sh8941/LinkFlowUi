import api from "./api";

export const getSummary = async (startDate, endDate) => {
    const response = await api.get(
        '/api/dashboard/summary', {
            params: {
                startDate: startDate,
                endDate: endDate
            }
        });
    return response;
}

export const getSummaryOverall = async () => {
    const response = await api.get(
        'api/dashboard/summary-overall', {
        });
    return response;
}

export const getTopLinks = async () => {
    const response = await api.get('/api/dashboard/top-urls',{
    });
    return response;
}

export const getLinks = async () => {
    const response = await api.get('/api/url/my',{
    });
    return response;
}