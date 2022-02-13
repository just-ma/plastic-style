/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onCreateFeature = /* GraphQL */ `
  subscription OnCreateFeature {
    onCreateFeature {
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
export const onUpdateFeature = /* GraphQL */ `
  subscription OnUpdateFeature {
    onUpdateFeature {
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
export const onDeleteFeature = /* GraphQL */ `
  subscription OnDeleteFeature {
    onDeleteFeature {
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
export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem {
    onCreateListItem {
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
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem {
    onUpdateListItem {
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
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem {
    onDeleteListItem {
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
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList {
    onCreateList {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
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
export const onCreatePodcastEpisode = /* GraphQL */ `
  subscription OnCreatePodcastEpisode {
    onCreatePodcastEpisode {
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
export const onUpdatePodcastEpisode = /* GraphQL */ `
  subscription OnUpdatePodcastEpisode {
    onUpdatePodcastEpisode {
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
export const onDeletePodcastEpisode = /* GraphQL */ `
  subscription OnDeletePodcastEpisode {
    onDeletePodcastEpisode {
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
export const onCreatePodcastSeason = /* GraphQL */ `
  subscription OnCreatePodcastSeason {
    onCreatePodcastSeason {
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
export const onUpdatePodcastSeason = /* GraphQL */ `
  subscription OnUpdatePodcastSeason {
    onUpdatePodcastSeason {
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
export const onDeletePodcastSeason = /* GraphQL */ `
  subscription OnDeletePodcastSeason {
    onDeletePodcastSeason {
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
