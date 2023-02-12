import { Movie } from "base/entities/Movie";
import { faker } from "@faker-js/faker";
import { categoryManager } from "base/dependencies/managers";
import axios from "axios";
import { Configs } from "base/entities/Configs";

export class MovieManager {
  private configs: Configs;

  constructor(configs: Configs) {
    this.configs = configs;
  }

  async getMovies(categoryId: string): Promise<Movie[]> {
    return axios
      .get(`${this.configs.apiUrl}/movies?categoryId=${categoryId}`)
      .then((res) => {
        return res.data;
      });
  }

  async changeFavorite(id: string, isFavorite: boolean): Promise<Movie[]> {
    return axios
      .post(`${this.configs.apiUrl}/movies/favorites`, { id, isFavorite })
      .then((res) => {
        return res.data;
      });
  }

  async getFavorites(): Promise<Movie[]> {
    return axios.get(`${this.configs.apiUrl}/movies/favorites`).then((res) => {
      return res.data;
    });
  }

  async searchInMovies(searchText: string): Promise<Movie[]> {
    return axios
      .get(`${this.configs.apiUrl}/movies?searchText=${searchText}`)
      .then((res) => {
        return res.data;
      });
  }
}
