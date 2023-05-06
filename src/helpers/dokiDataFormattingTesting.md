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