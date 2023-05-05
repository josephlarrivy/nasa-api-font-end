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

  async getCoronalMassEjectionAnalysisData(startDate = '2023-05-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/CMEAnalysis?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getGeomagneticStormData(startDate = '2023-02-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/GST?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getInterplanetaryShockData(startDate = '2023-02-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/IPS?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getSolarFlareData(startDate = '2023-02-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/FLR?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getSolarEnergeticParticleData(startDate = '2023-02-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/SEP?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getMagnetopauseCrossingData(startDate = '2023-02-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/MPC?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getRadiationBeltEnhancementData(startDate = '2023-02-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/RBE?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getWSAEnlilSimulationData(startDate = '2023-02-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/WSAEnlilSimulations?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getDokiNotificationsData(startDate = '2023-02-01', endDate = '2023-05-02') {
    try {
      const endpoint = `/DONKI/notifications?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getDokiData(service, startDate = '2023-02-01', endDate = '2023-05-02') {
    console.log('API service:', service)
    try {
      const endpoint = `/DONKI/${service}?startDate=${startDate}&endDate=${endDate}`;
      const data = await this.makeRequest(endpoint);

      // Initialize an object with all possible keys
      const keys = {
        activityID: null,
        time21_5: null,
        gstID: null,
        flrID: null,
        sepID: null,
        mpcID: null,
        rbeID: null,
      };

      // Standardize the data format
      let standardizedData = [];
      for (let item of data) {
        let newObj = {};

        // Assign values to each key in the newObj object
        for (let key in keys) {
          if (item.hasOwnProperty(key)) {
            newObj[key] = item[key];
          }
        }

        // Assign the common keys based on the type of event
        if (item.hasOwnProperty("activityID")) {
          newObj.type = "CME";
          newObj.startTime = item.startTime;
          newObj.link = item.link;
          newObj.note = item.note;
          newObj.instruments = item.instruments;
          newObj.cmeAnalyses = item.cmeAnalyses;
        } else if (item.hasOwnProperty("time21_5")) {
          newObj.type = "CME Analysis";
          newObj.latitude = item.latitude;
          newObj.longitude = item.longitude;
          newObj.halfAngle = item.halfAngle;
          newObj.speed = item.speed;
          newObj.isMostAccurate = item.isMostAccurate;
          newObj.note = item.note;
          newObj.enlilList = item.enlilList;
        } else if (item.hasOwnProperty("gstID")) {
          newObj.type = "Geomagnetic Storm";
          newObj.startTime = item.startTime;
          newObj.allKpIndex = item.allKpIndex;
          newObj.linkedEvents = item.linkedEvents;
        } else if (item.hasOwnProperty("flrID")) {
          newObj.type = "Solar Flare";
          newObj.beginTime = item.beginTime;
          newObj.peakTime = item.peakTime;
          newObj.endTime = item.endTime;
          newObj.classType = item.classType;
          newObj.sourceLocation = item.sourceLocation;
          newObj.linkedEvents = item.linkedEvents;
        } else if (item.hasOwnProperty("sepID")) {
          newObj.type = "Solar Energetic Particle";
          newObj.eventTime = item.eventTime;
          newObj.instruments = item.instruments;
          newObj.linkedEvents = item.linkedEvents;
        } else if (item.hasOwnProperty("mpcID")) {
          newObj.type = "Magnetopause Crossing";
          newObj.eventTime = item.eventTime;
          newObj.instruments = item.instruments;
          newObj.linkedEvents = item.linkedEvents;
        } else if (item.hasOwnProperty("rbeID")) {
          newObj.type = "Radiation Belt Enhancement";
          newObj.eventTime = item.eventTime;
          newObj.instruments = item.instruments;
          newObj.linkedEvents = item.linkedEvents;
        };

        standardizedData.push(newObj);
      }
      return standardizedData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  

}

const NASA_DATA_REQUEST = new NASA_API();

export default NASA_DATA_REQUEST;