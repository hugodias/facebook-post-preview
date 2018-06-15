import ogs from "open-graph-scraper";
import getUrl from "get-urls";

export function handler(event, context, callback) {
  let text = event.queryStringParameters.q;
  const urls = getUrl(text);

  // Return if there is no urls in text
  if (!urls.size) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: text })
    });
  }

  // Retrieve first URL in text - urls are already normalized
  const url = [...urls][0];

  const options = { url };

  // TODO: Remove URLS from text

  // TODO: Build an object with og data and text without URLS

  ogs(options, (error, results) => {
    // TODO: Refactor this
    const statusCode = results.success ? 200 : 500;
    const body = results.success ? results.data : results.error;

    callback(null, {
      statusCode,
      body: JSON.stringify(body)
    });
  });
}
