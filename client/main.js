import API from "./api-service.js";
import HeaderComponent from "./components/concrete/header-component.js";
import FormComponent from "./components/concrete/form-submit-component.js";
import MoviesListComponent from "./components/concrete/movies-list-component.js";
import HeaderContainerComponent from "./components/wrappers/header-container-component.js";
import ContainerComponent from "./components/wrappers/container-component.js";

const rootHtmlElement = document.querySelector("#root");

const onDeleteMovie = async ({ id }) => {
  await API.deleteMovie({ id });
};

const onCreateMovie = async ({ title }) => {
  await API.createMovie({ title });
};

API.getMovies().then((movies) => {
  const headerComponent = new HeaderComponent({
    text: "Movie Lister",
    className: "bg-success text-white p-4 mb-3",
  });
  const formComponent = new FormComponent({ onCreateMovie });
  const moviesListComponent = new MoviesListComponent({
    movies,
    onDeleteMovie,
  });

  const headerContainer = new HeaderContainerComponent([
    headerComponent.htmlElement,
  ]);

  const container = new ContainerComponent([
    formComponent.htmlElement,
    moviesListComponent.htmlElement,
  ]);

  rootHtmlElement.append(headerContainer.htmlElement);
  rootHtmlElement.append(container.htmlElement);
});
