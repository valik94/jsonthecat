const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
    if (error) {
      callback(error, null);
    }
    //console.log(typeof body);
    const data = JSON.parse(body);
    //console.log(typeof data);
    //console.log(typeof data[0].description);
    if (data.length === 0) {
      callback('the data in the body is empty', null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};