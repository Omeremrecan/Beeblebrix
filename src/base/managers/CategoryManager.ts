import axios from "axios";
import { Category } from "base/entities/Category";

export class CategoryManager {
  apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async getCategories(): Promise<Category[]> {
    return axios.get(`${this.apiUrl}/categories`).then((res) => {
      return res.data;
    });
  }
}
