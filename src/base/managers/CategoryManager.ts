import { Category } from 'base/entities/Category'

export class CategoryManager {
  async getCategories(): Promise<Category[]> {
    return [
      { id: '1', name: 'SCIENCE_FICTION' },
      { id: '2', name: 'FANTASTIC' },
      { id: '3', name: 'DRAMA' },
      { id: '4', name: 'COMEDY' },
      { id: '5', name: 'DOCUMENTARY' },
    ]
  }
}
