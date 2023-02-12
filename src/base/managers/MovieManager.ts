import { Movie } from "base/entities/Movie";
import { faker } from "@faker-js/faker";
import { categoryManager } from "base/dependencies/managers";
import axios from "axios";

export class MovieManager {
  apiUrl: string

  constructor(apiUrl:string){
    this.apiUrl = apiUrl;
  }

  async getMovies(categoryId: string): Promise<Movie[]> {
    return axios
      .get(`${this.apiUrl}/movies?categoryId=${categoryId}`)
      .then((res) => {
        return res.data;
      });
  }

  async searchInMovies(searchText: string) {}
}
