/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFeature = /* GraphQL */ `
  subscription OnCreateFeature {
    onCreateFeature {
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
export const onUpdateFeature = /* GraphQL */ `
  subscription OnUpdateFeature {
    onUpdateFeature {
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
export const onDeleteFeature = /* GraphQL */ `
  subscription OnDeleteFeature {
    onDeleteFeature {
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
export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem {
    onCreateListItem {
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
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem {
    onUpdateListItem {
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
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem {
    onDeleteListItem {
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
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList {
    onCreateList {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
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
export const onCreatePodcastEpisode = /* GraphQL */ `
  subscription OnCreatePodcastEpisode {
    onCreatePodcastEpisode {
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
export const onUpdatePodcastEpisode = /* GraphQL */ `
  subscription OnUpdatePodcastEpisode {
    onUpdatePodcastEpisode {
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
export const onDeletePodcastEpisode = /* GraphQL */ `
  subscription OnDeletePodcastEpisode {
    onDeletePodcastEpisode {
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
export const onCreatePodcastSeason = /* GraphQL */ `
  subscription OnCreatePodcastSeason {
    onCreatePodcastSeason {
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
export const onUpdatePodcastSeason = /* GraphQL */ `
  subscription OnUpdatePodcastSeason {
    onUpdatePodcastSeason {
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
export const onDeletePodcastSeason = /* GraphQL */ `
  subscription OnDeletePodcastSeason {
    onDeletePodcastSeason {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
