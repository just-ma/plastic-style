/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    }
  }
`;
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList {
    onCreateList {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
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
export const onCreatePodcastEpisode = /* GraphQL */ `
  subscription OnCreatePodcastEpisode {
    onCreatePodcastEpisode {
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
export const onUpdatePodcastEpisode = /* GraphQL */ `
  subscription OnUpdatePodcastEpisode {
    onUpdatePodcastEpisode {
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
export const onDeletePodcastEpisode = /* GraphQL */ `
  subscription OnDeletePodcastEpisode {
    onDeletePodcastEpisode {
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
