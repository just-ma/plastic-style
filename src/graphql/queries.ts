/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      modifiedAt
      _version
      _deleted
      _lastChangedAt
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
        modifiedAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFeatures = /* GraphQL */ `
  query SyncFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFeatures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        author
        image
        content
        createdAt
        modifiedAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
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
      listID
      _version
      _deleted
      _lastChangedAt
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
        listID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncListItems = /* GraphQL */ `
  query SyncListItems(
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        rank
        artist
        title
        image
        content
        listID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      title
      description
      author
      image
      createdAt
      modifiedAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      ListItems {
        nextToken
        startedAt
      }
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
        title
        description
        author
        image
        createdAt
        modifiedAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLists = /* GraphQL */ `
  query SyncLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        author
        image
        createdAt
        modifiedAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPodcastEpisode = /* GraphQL */ `
  query GetPodcastEpisode($id: ID!) {
    getPodcastEpisode(id: $id) {
      id
      podcastSeasonID
      title
      description
      image
      link
      author
      _version
      _deleted
      _lastChangedAt
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
        podcastSeasonID
        title
        description
        image
        link
        author
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPodcastEpisodes = /* GraphQL */ `
  query SyncPodcastEpisodes(
    $filter: ModelPodcastEpisodeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPodcastEpisodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        podcastSeasonID
        title
        description
        image
        link
        author
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PodcastEpisodes {
        nextToken
        startedAt
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPodcastSeasons = /* GraphQL */ `
  query SyncPodcastSeasons(
    $filter: ModelPodcastSeasonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPodcastSeasons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        seasonLabel
        description
        author
        image
        year
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
