const request = require('request');

if (!process.argv[2] || !process.argv[3]) {
  console.log('Pass Arguments <queue> <value> <size(required for first message in queue)>');
  process.exit();
}

const jsonBody = {
  queue: process.argv[2],
  value: process.argv[3],
  size: process.argv[4],
};

request.post(
  {
    url: 'http://localhost:3000/publish',
    json: jsonBody,
  },
  function(error, response, body) {
    console.log(body);
  }
);
