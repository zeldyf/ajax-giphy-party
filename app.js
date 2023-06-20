const $input = $(".input")
const $searchButton = $(".search")
const $removeBtn = $(".remove")

$searchButton.on("click", search);
$removeBtn.on("click", remove);

function search(e) {
  e.preventDefault();
  let $userInput = $(".input").val();
  $(".input").val("");
  getGiphy($userInput);
}

async function getGiphy(searchTerm) {
  let response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { api_key: "Tt05yHbrIdxOj4jmS5aHjOHAVWIrVxh1", q: searchTerm } });
  const data = response.data
  const url = response.data.data[Math.floor(Math.random() * 51)].images.original.url;
  createGif(url);
}

function createGif(data) {
  const $newGif = $("<img>", { src: data, class: "container_column" });
  $(".results-container").append($newGif);
}

function remove(e) {
  e.preventDefault();
  $(".results-container").empty();
}

