import fetch from "node-fetch";

export default function tintuFetch(url, method, resolvedCallback, rejectedCallback) {
  return fetch(url, {
    method
  })
    .then((response) => {
      if (!response.ok) {
        if (rejectedCallback) {
          rejectedCallback(response.status);
        }
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
    })
    .catch((err) => {
      if (rejectedCallback) {
        rejectedCallback(500);
      }
    });
}