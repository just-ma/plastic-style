/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFeature = /* GraphQL */ `
  mutation CreateFeature(
    $input: CreateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    createFeature(input: $input, condition: $condition) {
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
export const updateFeature = /* GraphQL */ `
  mutation UpdateFeature(
    $input: UpdateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    updateFeature(input: $input, condition: $condition) {
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
export const deleteFeature = /* GraphQL */ `
  mutation DeleteFeature(
    $input: DeleteFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    deleteFeature(input: $input, condition: $condition) {
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
export const createListItem = /* GraphQL */ `
  mutation CreateListItem(
    $input: CreateListItemInput!
    $condition: ModelListItemConditionInput
  ) {
    createListItem(input: $input, condition: $condition) {
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
export const updateListItem = /* GraphQL */ `
  mutation UpdateListItem(
    $input: UpdateListItemInput!
    $condition: ModelListItemConditionInput
  ) {
    updateListItem(input: $input, condition: $condition) {
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
export const deleteListItem = /* GraphQL */ `
  mutation DeleteListItem(
    $input: DeleteListItemInput!
    $condition: ModelListItemConditionInput
  ) {
    deleteListItem(input: $input, condition: $condition) {
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
export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
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
export const createPodcastEpisode = /* GraphQL */ `
  mutation CreatePodcastEpisode(
    $input: CreatePodcastEpisodeInput!
    $condition: ModelPodcastEpisodeConditionInput
  ) {
    createPodcastEpisode(input: $input, condition: $condition) {
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
export const updatePodcastEpisode = /* GraphQL */ `
  mutation UpdatePodcastEpisode(
    $input: UpdatePodcastEpisodeInput!
    $condition: ModelPodcastEpisodeConditionInput
  ) {
    updatePodcastEpisode(input: $input, condition: $condition) {
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
export const deletePodcastEpisode = /* GraphQL */ `
  mutation DeletePodcastEpisode(
    $input: DeletePodcastEpisodeInput!
    $condition: ModelPodcastEpisodeConditionInput
  ) {
    deletePodcastEpisode(input: $input, condition: $condition) {
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
export const createPodcastSeason = /* GraphQL */ `
  mutation CreatePodcastSeason(
    $input: CreatePodcastSeasonInput!
    $condition: ModelPodcastSeasonConditionInput
  ) {
    createPodcastSeason(input: $input, condition: $condition) {
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
export const updatePodcastSeason = /* GraphQL */ `
  mutation UpdatePodcastSeason(
    $input: UpdatePodcastSeasonInput!
    $condition: ModelPodcastSeasonConditionInput
  ) {
    updatePodcastSeason(input: $input, condition: $condition) {
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
export const deletePodcastSeason = /* GraphQL */ `
  mutation DeletePodcastSeason(
    $input: DeletePodcastSeasonInput!
    $condition: ModelPodcastSeasonConditionInput
  ) {
    deletePodcastSeason(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
