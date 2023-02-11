import { Movie } from 'base/entities/Movie'
import { faker } from '@faker-js/faker'

export class MovieManager {
  async getMovies(categoryId: string): Promise<Movie[]> {
    const list: Movie[] = []

    for (var i = 0; i < 20; i++) {
      list.push({
        id: i.toString(),
        title: faker.lorem.words(2),
        imgSrc: faker.image.image(),
        categoryId: categoryId,
      })
    }
    return list
  }
}
