import axios from 'axios';
import { twoline2satrec, propagate, eciToGeodetic, gstime } from "satellite.js";

// import {nasa_api_key} from './key'
const nasa_api_key = 'm4tzZpFC2gZtjEvCkg5JopNsDiD7JMZ7qRqXJdQi'

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


  async getTleData(noradId) {
    const url = `https://tle.ivanstanojevic.me/api/tle/${noradId}`;
    const response = await axios.get(url);

    const tleData = response.data;
    const line1 = tleData.line1
    const line2 = tleData.line2

    const satRec = twoline2satrec(line1, line2);
    const positionAndVelocity = propagate(satRec, new Date());
    const gmst = gstime(new Date());
    const latLng = eciToGeodetic(positionAndVelocity.position, gmst);

    const idToNameDict = {
      25544: "International Space Station",
      43700: "Chinese space station Tiangong-2",
      43711: "Northrop Grumman's NG-12 Cygnus",
      43215: "OneWeb Satellite",
      28485: "NASA's Chandra X-ray Observatory",
      25994: "NASA's Terra Earth-observing Satellite"
    }

    const result = {
      'name' : idToNameDict[noradId],
      'latitude' : latLng.latitude * (180 / Math.PI),
      'longitude' : latLng.longitude * (180 / Math.PI)
    };

    return result;
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
      const response = await this.makeRequest(endpoint);
      // console.log(response)

      if (service === 'CME') {
        const mySet = new Set();

        for (let item of response.slice(0, 20)) {
          const activityUrl = 'https://api.nasa.gov/DONKI/CME?activityID='
          let resp = await axios.get(`${activityUrl}${item.activityID}&api_key=${this.api_key}`)
          console.log(resp)
        }

       

        let responseData = [...mySet];
        return responseData;
      }

      // for (let item of separatedData) {
        //   console.log(item.activityID)
        //   const activityUrl = 'https://api.nasa.gov/DONKI/CME?activityID='
        //   let resp = await axios.get(`${activityUrl}${item.activityID}&api_key=${this.api_key}`)
        //   console.log(resp)
        //   let info = resp.data[0]
        //   responseData.push({
        //     'startTime' : info.startTime,
        //     'instruments' : info.instruments,
        //     'description' : info.note
        //   })
        // }

    } catch (error) {
      console.error(error);
      return null;
    }
  }

  

}

const NASA_DATA_REQUEST = new NASA_API();

export default NASA_DATA_REQUEST;