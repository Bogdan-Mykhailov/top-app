import React, {useEffect, useState, KeyboardEvent} from 'react';
import {IRatingProps} from "./Rating.props";
import s from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';

export const Rating = ({
                         rating,
                         setRating,
                         isEditable = false,
                         ...restProps
                       }: IRatingProps): JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArr = ratingArr.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(s.star, {
            [s.filled]: i < currentRating,
            [s.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => clickHandler(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>

      );
    });
    setRatingArr(updateArr);
  };

  const changeDisplay = (rating: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(rating);
  };

  const clickHandler = (rating: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(rating);
  };

  const handleSpace = (rating: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }
    setRating(rating);
  };

  return (
    <div{...restProps}>
      {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
};
