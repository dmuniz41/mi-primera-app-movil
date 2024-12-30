export async function getData() {
  const rawData = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((response) => response.json());

  return rawData;
}
