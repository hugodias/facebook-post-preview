import ogs from 'open-graph-scraper';

export function handler(event, context, callback){
  const url = event.queryStringParameters.url;
  const options = {'url': url};

  ogs(options, (error, results) => {
    console.log(results);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({msg: "After OG" })
    })
  });
}
