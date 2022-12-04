export async function getData() {
  const data = await fetch("./data.json");
  const dataResp = await data.json();
  console.log(dataResp);

  return dataResp;
}
