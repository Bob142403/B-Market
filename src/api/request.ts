export const request = (url: string, options?: RequestInit) =>
  fetch(url, {
    ...options,
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
