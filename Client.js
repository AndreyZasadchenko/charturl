'use strict';

const request = require('request-promise');

class Client {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  bulk(req) {
    req = JSON.stringify(req);

    let options = {
      method: 'POST',
      uri: 'https://charturl.com/short-urls/bulk.json',
      qs: {
        api_key: this.API_KEY
      },
      body: req,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(req)
      }
    };

    return request(options)
      .then(JSON.parse)
      .then(res => res['short_urls']);
  }
}

module.exports = Client;
