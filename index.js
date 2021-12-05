//It will require and run our main fetch function

// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss')

// fetchMyIP((error, ip) => {
//   if (error) return console.log("It didn't work!" , error);
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('99.253.201.155', (error, data) => {
//   if (error) return console.log("Error:", error);
//   console.log('It worked! Returned coordinates:' , data)
// });

// const coords = { longitude: -80.3295, latitude: 43.1291 };
// fetchISSFlyOverTimes(coords, (error, passTimes) =>  {
//   if (error) console.log("Error:", error);
//   console.log('It worked! Returned flyover times:' , passTimes);
// });


const printPassTimes = (passTimes) => {
  for (let pass of passTimes) {
    const time = new Date(0);
    time.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${time} for ${duration} seconds!`);
  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) return console.log("It didn't work!", error);
  
  printPassTimes(passTimes);
});