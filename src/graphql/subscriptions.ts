/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($owner: String) {
    onCreateReview(owner: $owner) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($owner: String) {
    onUpdateReview(owner: $owner) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($owner: String) {
    onDeleteReview(owner: $owner) {
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
export const onCreateFeature = /* GraphQL */ `
  subscription OnCreateFeature($owner: String) {
    onCreateFeature(owner: $owner) {
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
export const onUpdateFeature = /* GraphQL */ `
  subscription OnUpdateFeature($owner: String) {
    onUpdateFeature(owner: $owner) {
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
export const onDeleteFeature = /* GraphQL */ `
  subscription OnDeleteFeature($owner: String) {
    onDeleteFeature(owner: $owner) {
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
export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem($owner: String) {
    onCreateListItem(owner: $owner) {
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
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem($owner: String) {
    onUpdateListItem(owner: $owner) {
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
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem($owner: String) {
    onDeleteListItem(owner: $owner) {
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
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList($owner: String) {
    onCreateList(owner: $owner) {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList($owner: String) {
    onUpdateList(owner: $owner) {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList($owner: String) {
    onDeleteList(owner: $owner) {
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
export const onCreatePodcastEpisode = /* GraphQL */ `
  subscription OnCreatePodcastEpisode($owner: String) {
    onCreatePodcastEpisode(owner: $owner) {
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
export const onUpdatePodcastEpisode = /* GraphQL */ `
  subscription OnUpdatePodcastEpisode($owner: String) {
    onUpdatePodcastEpisode(owner: $owner) {
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
export const onDeletePodcastEpisode = /* GraphQL */ `
  subscription OnDeletePodcastEpisode($owner: String) {
    onDeletePodcastEpisode(owner: $owner) {
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
export const onCreatePodcastSeason = /* GraphQL */ `
  subscription OnCreatePodcastSeason($owner: String) {
    onCreatePodcastSeason(owner: $owner) {
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
export const onUpdatePodcastSeason = /* GraphQL */ `
  subscription OnUpdatePodcastSeason($owner: String) {
    onUpdatePodcastSeason(owner: $owner) {
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
export const onDeletePodcastSeason = /* GraphQL */ `
  subscription OnDeletePodcastSeason($owner: String) {
    onDeletePodcastSeason(owner: $owner) {
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
