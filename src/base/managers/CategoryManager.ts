import axios from "axios";
import { Category } from "base/entities/Category";
import { Configs } from "base/entities/Configs";

export class CategoryManager {
  private confgis: Configs;

  constructor(confgis: Configs) {
    this.confgis = confgis;
  }

  async getCategories(): Promise<Category[]> {
    return axios.get(`${this.confgis.apiUrl}/categories`).then((res) => {
      return res.data;
    });
  }
}
