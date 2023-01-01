// import API from "../../api-service.js";

class MoviesListComponent {
  htmlElement;
  onDeleteMovie;

  constructor({ movies, onDeleteMovie }) {
    this.htmlElement = document.createElement("ul");
    this.htmlElement.className = "items list-group";
    this.htmlElement.innerHTML = `
          ${movies
            .map(
              ({ id, title, done }) => `
      <li class="list-group-item">
        ${title}
        <button class="btn btn-danger btn-sm float-end delete-${id}">✕</button>
        <button class="btn btn-warning btn-sm float-end me-2 edit-${id}">⟳</button>
        <button class="btn btn-success btn-sm float-end me-2 accept">✓</button>
      </li>
      `
            )
            .join("")}`;
    // <button class="btn btn-secondary btn-sm float-end me-2 cancel">⦰</button>
    this.onDeleteMovie = onDeleteMovie;

    movies.forEach(({ id }) => {
      const delButton = this.htmlElement.querySelector(`.delete-${id}`);
      delButton.addEventListener("click", () => {
        // console.log(`paspaustas mygtukas ${id}`);
        // API.deleteMovie(id);
        this.onDeleteMovie({ id });
      });
    });

    movies.forEach(({ id }) => {
      const updateButton = this.htmlElement.querySelector(`.edit-${id}`);
      const titleEditable = this.htmlElement.querySelector(`.list-group-item`);
      let isBeingEdited = false;
      updateButton.addEventListener("click", () => {
        if (isBeingEdited) {
          updateButton.innerHTML = "⟳";
          updateButton.classList.remove("bg-secondary");
          isBeingEdited = false;
          titleEditable.setAttribute("contenteditable", "false");
        } else {
          console.log(`paspaustas mygtukas ${id}`);
          console.log(titleEditable);
          updateButton.innerHTML = "⦰";
          updateButton.classList.add("bg-secondary");
          isBeingEdited = true;
          titleEditable.setAttribute("contenteditable", "true");
        }
      });
      updateButton.addEventListener("blur", () => {
        updateButton.innerHTML = "⟳";
        updateButton.classList.remove("bg-secondary");
        isBeingEdited = false;
      });
    });
  }
}

export default MoviesListComponent;
