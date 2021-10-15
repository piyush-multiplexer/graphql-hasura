const axios = require("axios");

exports.handler = async function () {
  const url = `https://www.boredapi.com/api/activity/`;
  const response = await axios.get(url);
  return {
    statusCode: 200,
    body: JSON.stringify({ activity: response.data }),
  };
};
