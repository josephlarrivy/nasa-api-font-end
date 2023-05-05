import axios from 'axios';

import {nasa_api_key} from './key'

class NASA_API {
  constructor() {
    this.api_key = nasa_api_key;
    this.base_url = 'https://api.nasa.gov';
    this.image_url = 'https://images-api.nasa.gov';
  }

  async makeRequest(endpoint, type='base') {
    let url
    if (type === 'base') {
      url = `${this.base_url}${endpoint}&api_key=${this.api_key}`;
    } else if (type === 'image') {
      url = `${this.image_url}${endpoint}`;
    }
    try {
      console.log(url)
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.error.message);
      } else {
        throw new Error(error.message);
      }
    }
  }

  async getCuriosityPhotos(sol) {
    const endpoint = `/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}`;
    const data = await this.makeRequest(endpoint);
    return data;
  }

  async queryImages(term) {
    const endpoint = `/search?q=${term}`;
    const data = await this.makeRequest(endpoint, 'image');
    return data.collection.items;
  }

  async getNeoObjectData(startDate = '2023-06-04', endDate ='2023-06-04') {
  try {
    const endpoint = `/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}`
    const response = await this.makeRequest(endpoint)
    
    const objectData = [];
    for (const date in response.near_earth_objects) {
      for (const object of response.near_earth_objects[date]) {
        const name = object.name;
        const size = object.estimated_diameter.kilometers.estimated_diameter_max;
        const distance = object.close_approach_data[0].miss_distance.kilometers;
        objectData.push({ name, size, distance });
      }
    }

      return objectData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getCoronalMassEjectionData(startDate = '2023-05-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/CME?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }


  

}

const NASA_DATA_REQUEST = new NASA_API();

export default NASA_DATA_REQUEST;