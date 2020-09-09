const API_BASE_URL = 'https://www.nbrb.by/API/ExRates/Rates/Dynamics';

class RequestService {
    
    static async getChartSeries(currency: number) {
        const response = await fetch(`${API_BASE_URL}/${currency}?startDate=2020-9-1&endDate=2020-9-30`);
        return response.json();
    }
}

export default RequestService;