import React from 'react';

import ReviewListItem from './ui/review-list-item/ReviewListItem';

export const MOCK_REVIEWS = [
  {
    reviewId: '123',
    artist: 'Lightning McQueen',
    title: 'Speed... I Am Speed',
    author: 'Parker Albert',
    dateCreated: 1621916461,
    src: 'https://images-na.ssl-images-amazon.com/images/I/71KscxenwgL._AC_SL1500_.jpg',
    content:
      'Lightning McQueen knocks it out of the park once again with his 10th album this year. ' +
      'I dont know how he manages to create so much content without ever sacrficing quality. ' +
      '10/10 piston cups for this absolute banger.',
  },
  {
    reviewId: '456',
    artist: 'Lightning McQueen',
    title: '2 Speedy',
    author: 'Ben Langdon-Westwood',
    dateCreated: 1621916461,
    src: 'https://images-na.ssl-images-amazon.com/images/I/71KscxenwgL._AC_SL1500_.jpg',
    content: 'Wow... just wow.',
  },
  {
    reviewId: '789',
    artist: 'Lightning McQueen McQueen McQueen',
    title: 'Long Title Loooooong Title its a long title',
    author: 'Ben Langdon-Westwood',
    dateCreated: 1621816461,
    src: 'https://images-na.ssl-images-amazon.com/images/I/71KscxenwgL._AC_SL1500_.jpg',
    content: 'Wow... just wow.',
  },
];

export default function Reviews(): React.ReactElement {
  return (
    <div>
      {MOCK_REVIEWS.map((meta, index) => (
        <ReviewListItem key={index} {...meta} />
      ))}
    </div>
  );
}
