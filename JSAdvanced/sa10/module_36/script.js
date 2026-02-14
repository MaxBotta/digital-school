const list = document.getElementById("list");

async function fetchData() {
  try {
    const result = await fetch(
      "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_end,image_id,short_description,",
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
    newLi.classList.add("col-lg-3");
    newLi.classList.add("col-md-6");

    const newDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;

    const newTitle = document.createElement("h6");
    newTitle.innerText = item.title;

    const newDescription = document.createElement("div");

    newDescription.innerText = item.short_description
      ? item.short_description.slice(0, 100) + "..."
      : "";

    newDiv.appendChild(img);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newDescription);
    newLi.appendChild(newDiv);
    list.appendChild(newLi);
  }
}

async function start() {
  const data = await fetchData();
  renderList(data);
}

start();

// Beispiel JS Objekt in Liste
// const data = [
//   {
//     name: "asndlkas",
//   },
//   {
//     name: "nqeoklfqe",
//   },
// ];
