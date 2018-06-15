import ogs from "open-graph-scraper";
import getUrl from "get-urls";

export function handler(event, context, callback) {
  const text = event.queryStringParameters.q;
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
    const body = {
      meta: statusCode === 200 ? results.data : null,
      text: cleanText(text),
      error: statusCode !== 200 ? results.error : null
    };
  
    callback(null, {
      statusCode,
      body: JSON.stringify(body)
    });
  });
}

function cleanText(text) {
  return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, "");
}

function buildResponseObject(statusCode, result, text) {
  const body = {
    meta: statusCode === 200 ? result.data : null,
    text,
    error: statusCode !== 200 ? result.error : null
  };

  return {
    statusCode,
    body
  };
}
