const newDiv = document.querySelector(".row");
const navDiv = document.createElement("div");
const newCon = document.querySelector(".container");
navDiv.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-info">
      <a class="navbar-brand" href="#">Movies Catalog</a>
  </nav>
`;
navDiv.setAttribute("class", "p-0")


const fResult = document.createElement("div");
fResult.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-info bg-opacity-50 mt-2">
    <p class="result">Search result: ${films.length}</p>
  </nav>
`;
fResult.setAttribute("class", "p-0")

const sDrop = document.createElement("div")
sDrop.setAttribute("class", "p-0")
sDrop.innerHTML = `
<form>
    <select name="genre" id="genre">
        <option value="1">Action</option>
        <option value="2">Adventure</option>
        <option value="3">Science Fiction</option>
        <option value="4">Animation</option>
        <option value="5">Comedy</option>
        <option value="6">Family</option>
        <option value="7">Thriller</option>
        <option value="8">Horror</option>
        <option value="9">Fantasy</option>
        <option value="10">Mystery</option>
        <option value="11">Drama</option>
    </select>
    <input type="button" value="search">
   </form>
`

newDiv.appendChild(navDiv)
newDiv.appendChild(fResult)
newDiv.appendChild(sDrop)

for (let film of films) {
  const fImg = document.createElement("img");
  const fTitle = document.createElement("h4");
  const elDiv = document.createElement("div");
  const fButton = document.createElement("button");
  // const fGenre = document.createElement("li")






  fImg.setAttribute("src", film.poster);
  fImg.setAttribute("class", "card-img-top");
  elDiv.setAttribute("class", "col-3 card");
  fButton.setAttribute("class", "btn btn-danger w-50");








  fTitle.textContent = film.title;
  fButton.textContent = "Watch trailer";
  // fGenre.textContent = film.genres



  const bmDiv = document.createElement("div")
  bmDiv.setAttribute("class", "p-4")




  newDiv.appendChild(elDiv);
  elDiv.appendChild(fImg);
  elDiv.appendChild(bmDiv)
  bmDiv.appendChild(fTitle);
  bmDiv.appendChild(fButton);
  // elDiv.appendChild(fGenre)

  film.genres.forEach(fGenre => {
    const genre = document.createElement("li")
    genre.setAttribute("type", "circle")
    genre.textContent = fGenre
    bmDiv.appendChild(genre)
  });
}
