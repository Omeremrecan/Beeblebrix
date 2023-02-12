export type CardProps = {
  imgSrc: string;
  title: string;
  href: string;
  isFavorite?: boolean;
  onFavoriteChange?: (isFavorite: boolean) => void;
  isFavoriteActive?: boolean
};
