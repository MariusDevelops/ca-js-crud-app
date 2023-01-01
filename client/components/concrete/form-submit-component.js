// import API from "../../api-service.js";

class FormComponent {
  htmlElement;

  constructor({ onCreateMovie }) {
    this.htmlElement = document.createElement("form");
    this.htmlElement.className = "form-inline mb-3";
    this.htmlElement.innerHTML = `
      <h2 class="title">Add Movies</h2>
      <input id="item" type="text" class="form-control d-inline w-25 me-2" name="title"/>
      <button type="submit" class="btn btn-success">Submit</button>
    `;

    this.htmlElement.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const title = formData.get("title");
      onCreateMovie({ title });
      // await API.createMovie({ title });
      // console.log(title);
    });
  }
}

export default FormComponent;
