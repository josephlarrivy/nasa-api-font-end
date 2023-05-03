import axios from 'axios';

const nasa_api_key = require('./key')

class NASA_API {
  constructor() {
    this.api_key = nasa_api_key;
    this.base_url = 'https://api.nasa.gov';
  }

  async makeRequest(endpoint, params = {}) {
    const url = `${this.base_url}${endpoint}`;
    params['api_key'] = this.api_key;
    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }

  async getNearEarthObjects(startDate, endDate) {
    const endpoint = '/neo/rest/v1/feed';
    const params = { start_date: startDate, end_date: endDate };
    return this.makeRequest(endpoint, params);
  }
}

export default NASA_API;