import "../components/showcase-list/showcase-list.js";

function main() {
  const data = [1, 2, 3, 4];

  data.forEach((a) => console.log(a));
  const showcaseListElement = document.querySelector("showcase-list");
  console.log(showcaseListElement);
  console.log("row");
  showcaseListElement.showcaseItems = data;
}

export default main;
