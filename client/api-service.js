const API = {
  async getMovies() {
    try {
      const response = await fetch("http://localhost:5000/movies");
      const movies = await response.json();

      return movies;
    } catch (error) {
      return error;
    }
  },

  async deleteMovie({ id }) {
    try {
      const response = await fetch(`http://localhost:5000/movies/${id}`, {
        method: "DELETE",
      });
      const deletedMovie = await response.json();

      return deletedMovie;
    } catch (error) {
      return error;
    }
  },

  async createMovie(movieData) {
    try {
      const response = await fetch(`http://localhost:5000/movies`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });
      const createMovie = await response.json();

      return createMovie;
    } catch (error) {
      return error;
    }
  },
};

export default API;
