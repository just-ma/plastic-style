/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      artist
      title
      author
      src
      content
      createdAt
      modifiedAt
      updatedAt
      _version
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        artist
        title
        author
        src
        content
        createdAt
        modifiedAt
        updatedAt
        _version
      }
      nextToken
    }
  }
`;
