const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printPassTimes = (passTimes) => {
  for (let pass of passTimes) {
    const time = new Date(0);
    time.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${time} for ${duration} seconds!`);
  }
}