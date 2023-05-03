import axios from 'axios';

import {nasa_api_key} from './key'

class NASA_API {
  constructor() {
    this.api_key = nasa_api_key;
    this.base_url = 'https://api.nasa.gov';
  }

  async makeRequest(endpoint, params = {}) {
    const url = `${this.base_url}${endpoint}&api_key=${this.api_key}`;
    try {
      // console.log(url)
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }

  async test() {
    return 'test'
  }

  async getCuriosityPhotos(sol) {
    const endpoint = `/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}`;
    const data = await this.makeRequest(endpoint);
    return data;
  }
}

const NASA_DATA_REQUEST = new NASA_API();

export default NASA_DATA_REQUEST;