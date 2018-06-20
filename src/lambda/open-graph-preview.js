import ogs from "open-graph-scraper";
import getUrl from "get-urls";

export function handler(event, context, callback) {
  const text = event.queryStringParameters.q;
  const urls = getUrl(text);

  // Return if there is no urls in text
  if (!urls.size) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        text: text,
        meta: null,
        error: ["Empty url in text"]
      })
    });
  }

  // Retrieve first URL in text - urls are already normalized
  const url = [...urls][0];
  const options = { url };

  ogs(options, (error, results) => {
    // TODO: Refactor this
    const statusCode = results.success ? 200 : 500;

    callback(null, buildResponseObject(statusCode, results, text));
  });
}

function getUrlDomain(url) {
  const urlObj = new URL(url);
  return urlObj.hostname;
}

function cleanText(text) {
  return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, "");
}

function buildResponseObject(statusCode, result, text) {
  let meta = statusCode === 200 ? result.data : null;

  if (meta) {
    let images = meta.ogImage;

    if (images instanceof Array) {
      meta.ogImage = images[0];
    }

    let domain = meta.ogUrl;

    if (domain) {
      meta.ogUrl = getUrlDomain(meta.ogUrl);
    }
  }

  console.log(meta);

  const body = {
    meta: meta,
    text: cleanText(text),
    error: statusCode !== 200 ? result.error : null
  };

  return {
    statusCode,
    body: JSON.stringify(body)
  };
}
