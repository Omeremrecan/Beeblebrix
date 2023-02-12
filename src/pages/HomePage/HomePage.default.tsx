import {
  Card,
  Collection,
  Navbar,
  PageContainer,
} from 'base/dependencies/components'
import { categoryManager, movieManager } from 'base/dependencies/managers'
import { Category } from 'base/entities/Category'
import { Movie } from 'base/entities/Movie'
import { Keys } from 'base/localization/Keys'
import requireAuthentication from 'hocs/requireAuthentication'
import useTranslation from 'hooks/useTranslation'
import React, { useEffect, useState } from 'react'

const HomePageComponent = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const [translate] = useTranslation()

  useEffect(() => {
    categoryManager.getCategories().then(setCategories)
  }, [])

  const CollectionsByCategory = ({ category }: { category: Category }) => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
      movieManager.getMovies(category.id).then(setMovies)
    }, [])

    return (
      <Collection title={translate(category.name as Keys)}>
        {movies.map((movie) => (
          <Card key={movie.id} title={movie.title} imgSrc={movie.imgSrc} href="" />
        ))}
      </Collection>
    )
  }

  return (
    <>
      <Navbar />
      <PageContainer>
        {categories.map((category) => (
          <CollectionsByCategory key={category.id} category={category} />
        ))}
      </PageContainer>
    </>
  )
}

export const HomePage = requireAuthentication(HomePageComponent);
