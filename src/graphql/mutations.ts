/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
      reviewId
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
    }
  }
`;
export const createFeature = /* GraphQL */ `
  mutation CreateFeature(
    $input: CreateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    createFeature(input: $input, condition: $condition) {
      id
      featureId
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
export const updateFeature = /* GraphQL */ `
  mutation UpdateFeature(
    $input: UpdateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    updateFeature(input: $input, condition: $condition) {
      id
      featureId
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
export const deleteFeature = /* GraphQL */ `
  mutation DeleteFeature(
    $input: DeleteFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    deleteFeature(input: $input, condition: $condition) {
      id
      featureId
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
export const createListItem = /* GraphQL */ `
  mutation CreateListItem(
    $input: CreateListItemInput!
    $condition: ModelListItemConditionInput
  ) {
    createListItem(input: $input, condition: $condition) {
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
      listItemId
      listId
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
export const deleteListItem = /* GraphQL */ `
  mutation DeleteListItem(
    $input: DeleteListItemInput!
    $condition: ModelListItemConditionInput
  ) {
    deleteListItem(input: $input, condition: $condition) {
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
      listId
      author
      title
      description
      image
      itemIds
      createdAt
      updatedAt
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
      listId
      author
      title
      description
      image
      itemIds
      createdAt
      updatedAt
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
      listId
      author
      title
      description
      image
      itemIds
      createdAt
      updatedAt
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
      episodeId
      podcastId
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
export const updatePodcastEpisode = /* GraphQL */ `
  mutation UpdatePodcastEpisode(
    $input: UpdatePodcastEpisodeInput!
    $condition: ModelPodcastEpisodeConditionInput
  ) {
    updatePodcastEpisode(input: $input, condition: $condition) {
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
      episodeId
      podcastId
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
export const createPodcastSeason = /* GraphQL */ `
  mutation CreatePodcastSeason(
    $input: CreatePodcastSeasonInput!
    $condition: ModelPodcastSeasonConditionInput
  ) {
    createPodcastSeason(input: $input, condition: $condition) {
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
    }
  }
`;
