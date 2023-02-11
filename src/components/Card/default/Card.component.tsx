import React from 'react'
import { CardProps } from '../Card.types'
import './Card.style.scss'

export const Card = ({ imgSrc, title, href }: CardProps) => {
  return (
    <div className="card">
      <a href={href}>
        <img className='card--img' src={imgSrc} />
        <div className="card--title">{title}</div>
      </a>
    </div>
  )
}
