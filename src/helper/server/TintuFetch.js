import fetch from "node-fetch";

const TINT_SERVER = "http://45.32.71.240:8081";

/* 自定义GET */
function tintuFetch(url, resolvedCallback, rejectedCallback) {
  return fetch(url, {
    method: "GET"
  })
    .then((response) => {
      //console.log(response);
      if (!response.ok) {
        if (rejectedCallback) {
          rejectedCallback(response.status);
        }
        return;
      }

      return response.json();
    })
    .then((data) => {
      if (null !== data && "undefined" !== typeof data && data.length) {
        if (resolvedCallback) {
          resolvedCallback(data);
        }
        return;
      }
      /* 数据没有的情况下也走失败 */
      if (rejectedCallback) {
        rejectedCallback();
      }
    })
    .catch((err) => {
      if (rejectedCallback) {
        rejectedCallback(500);
      }
    });
}

/* 自定义POST */
function tintuPost(url, reqBody, resolvedCallback, rejectedCallback) {
  return fetch(url, {
    method: "POST",
    body: reqBody,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      //console.log(response);
      if (!response.ok) {
        if (rejectedCallback) {
          rejectedCallback(response.status);
        }
        return;
      }

      if (resolvedCallback) {
        resolvedCallback();
      }
    })
    .catch((err) => {
      if (rejectedCallback) {
        rejectedCallback(500);
      }
    });
}

module.exports = {
  TINT_SERVER,
  tintuFetch,
  tintuPost,
}