const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });  
axios
  .get(url)
  .then((response) => {
  const result = response.data.filter((constellation) => {
    return constellation.quadrant == "SQ1";
  })
  console.log(result)
})
.catch((error) => {
  console.log(error.message)
})
axios
.get(url)
.then((response) => {
  const result = response.data.map((constellation) => constellation.name);
  console.log(result)
})
