let input = document.getElementById("url_input");
let list = document.getElementById("ul");
//
function shorten() {
  let Api_url = `https://api.shrtco.de/v2/shorten?url=${input.value}`;

  fetch(Api_url)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data.result.short_link2);
      list.innerHTML = `<li class="short_links">${data.result.short_link2}<button class="copy" oncick="copy()">Copy</buttton> </li>`;
    });
}

function copy() {
  console.log(this.innerHTML);
}
