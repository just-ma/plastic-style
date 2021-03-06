/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      title
      artist
      recordLabel
      content
      image
      author
      createdAt
      updatedAt
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
        title
        artist
        recordLabel
        content
        image
        author
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFeature = /* GraphQL */ `
  query GetFeature($id: ID!) {
    getFeature(id: $id) {
      id
      title
      description
      author
      image
      content
      createdAt
      updatedAt
    }
  }
`;
export const listFeatures = /* GraphQL */ `
  query ListFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        author
        image
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getListItem = /* GraphQL */ `
  query GetListItem($id: ID!) {
    getListItem(id: $id) {
      id
      rank
      artist
      title
      image
      content
      createdAt
      updatedAt
    }
  }
`;
export const listListItems = /* GraphQL */ `
  query ListListItems(
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rank
        artist
        title
        image
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      author
      title
      description
      image
      items {
        id
        rank
        artist
        title
        image
        content
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        title
        description
        image
        items {
          id
          rank
          artist
          title
          image
          content
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPodcastEpisode = /* GraphQL */ `
  query GetPodcastEpisode($id: ID!) {
    getPodcastEpisode(id: $id) {
      id
      title
      description
      image
      link
      author
      createdAt
      updatedAt
    }
  }
`;
export const listPodcastEpisodes = /* GraphQL */ `
  query ListPodcastEpisodes(
    $filter: ModelPodcastEpisodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPodcastEpisodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        link
        author
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPodcastSeason = /* GraphQL */ `
  query GetPodcastSeason($id: ID!) {
    getPodcastSeason(id: $id) {
      id
      title
      seasonLabel
      description
      author
      image
      year
      episodes {
        id
        title
        description
        image
        link
        author
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPodcastSeasons = /* GraphQL */ `
  query ListPodcastSeasons(
    $filter: ModelPodcastSeasonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPodcastSeasons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        seasonLabel
        description
        author
        image
        year
        episodes {
          id
          title
          description
          image
          link
          author
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
