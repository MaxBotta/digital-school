const list = document.getElementById("list");

async function fetchData() {
  try {
    const result = await fetch(
      "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_end,image_id",
    );
    const jsonData = await result.json();
    console.log(jsonData);
    return jsonData.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

function renderList(data) {
  list.innerHTML = "";
  for (let item of data) {
    const newLi = document.createElement("li");
    newLi.classList.add("row");

    const newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.classList.add("mb-4");
    newDiv.classList.add("col-4");

    const img = document.createElement("img");
    img.src = `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;

    const newP = document.createElement("p");
    newP.innerText = item.title;

    newDiv.appendChild(img);
    newDiv.appendChild(newP);
    newLi.appendChild(newDiv);
    list.appendChild(newLi);
  }
}

async function start() {
  const data = await fetchData();
  renderList(data);
}

start();
