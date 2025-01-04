export async function getData() {
  const rawData = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((response) => response.json());

  return rawData;
}

export async function getPostDetails(id) {
  const rawData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  ).then((response) => response.json());

  return rawData;
}
