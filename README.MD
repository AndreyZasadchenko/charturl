# charturl

Simple library for generating ChartURL charts

## USAGE

```js
//Getting the new Client object;
const ChartURL = require('charturl').Client;
const Client = new ChartURL.Client(CHARTURL_API_KEY);

//Sending data to ChartURL
Client.bulk(data).then(charts => {
    return charts;
});
```


[ChartURL Official Website](https://charturl.com/)
