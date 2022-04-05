/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      reviewId
      title
      artist
      recordLabel
      content
      image
      author
      createdAt
      updatedAt
      owner
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
        reviewId
        title
        artist
        recordLabel
        content
        image
        author
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFeature = /* GraphQL */ `
  query GetFeature($id: ID!) {
    getFeature(id: $id) {
      id
      featureId
      title
      description
      author
      image
      content
      createdAt
      updatedAt
      owner
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
        featureId
        title
        description
        author
        image
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getListItem = /* GraphQL */ `
  query GetListItem($id: ID!) {
    getListItem(id: $id) {
      id
      listItemId
      listId
      rank
      artist
      title
      image
      content
      createdAt
      updatedAt
      owner
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
        listItemId
        listId
        rank
        artist
        title
        image
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      listId
      author
      title
      description
      image
      itemIds
      createdAt
      updatedAt
      owner
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
        listId
        author
        title
        description
        image
        itemIds
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPodcastEpisode = /* GraphQL */ `
  query GetPodcastEpisode($id: ID!) {
    getPodcastEpisode(id: $id) {
      id
      episodeId
      podcastId
      title
      description
      image
      link
      author
      createdAt
      updatedAt
      owner
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
        episodeId
        podcastId
        title
        description
        image
        link
        author
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPodcastSeason = /* GraphQL */ `
  query GetPodcastSeason($id: ID!) {
    getPodcastSeason(id: $id) {
      id
      podcastId
      title
      seasonLabel
      description
      author
      image
      year
      episodeIds
      createdAt
      updatedAt
      owner
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
        podcastId
        title
        seasonLabel
        description
        author
        image
        year
        episodeIds
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
