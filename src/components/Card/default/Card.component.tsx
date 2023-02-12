import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState, useEffect } from "react";
import { CardProps } from "../Card.types";
import "./Card.style.scss";

export const Card = ({
  imgSrc,
  title,
  href,
  isFavorite,
  onFavoriteChange,
  isFavoriteActive,
}: CardProps) => {
  const [isStarChecked, setIsStarChecked] = useState<boolean>(
    isFavorite ?? false
  );

  return (
    <div className="card">
      <div>
        {(isFavoriteActive ?? true) ? (
          <FontAwesomeIcon
            icon={solid("star")}
            className={`card--star ${
              isStarChecked ? "card--star-active" : ""
            } `}
            onClick={() => {
              setIsStarChecked(!isStarChecked);
              if (onFavoriteChange) {
                onFavoriteChange(!isStarChecked);
              }
            }}
          />
        ) : null}

        <img className="card--img" src={imgSrc} />
        <div className="card--title">{title}</div>
      </div>
    </div>
  );
};
