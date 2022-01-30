/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFeatureInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  author?: string | null,
  image: string,
  content: string,
  createdAt: number,
  modifiedAt?: number | null,
  _version?: number | null,
};

export type ModelFeatureConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  image?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  modifiedAt?: ModelIntInput | null,
  and?: Array< ModelFeatureConditionInput | null > | null,
  or?: Array< ModelFeatureConditionInput | null > | null,
  not?: ModelFeatureConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Feature = {
  __typename: "Feature",
  id: string,
  title: string,
  description?: string | null,
  author?: string | null,
  image: string,
  content: string,
  createdAt: number,
  modifiedAt?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
};

export type UpdateFeatureInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  author?: string | null,
  image?: string | null,
  content?: string | null,
  createdAt?: number | null,
  modifiedAt?: number | null,
  _version?: number | null,
};

export type DeleteFeatureInput = {
  id: string,
  _version?: number | null,
};

export type CreateListItemInput = {
  id?: string | null,
  rank?: number | null,
  artist?: string | null,
  title: string,
  image?: string | null,
  content: string,
  listID: string,
  _version?: number | null,
};

export type ModelListItemConditionInput = {
  rank?: ModelIntInput | null,
  artist?: ModelStringInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  content?: ModelStringInput | null,
  listID?: ModelIDInput | null,
  and?: Array< ModelListItemConditionInput | null > | null,
  or?: Array< ModelListItemConditionInput | null > | null,
  not?: ModelListItemConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ListItem = {
  __typename: "ListItem",
  id: string,
  rank?: number | null,
  artist?: string | null,
  title: string,
  image?: string | null,
  content: string,
  listID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateListItemInput = {
  id: string,
  rank?: number | null,
  artist?: string | null,
  title?: string | null,
  image?: string | null,
  content?: string | null,
  listID?: string | null,
  _version?: number | null,
};

export type DeleteListItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateListInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  author: string,
  image: string,
  createdAt: number,
  modifiedAt?: number | null,
  _version?: number | null,
};

export type ModelListConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  modifiedAt?: ModelIntInput | null,
  and?: Array< ModelListConditionInput | null > | null,
  or?: Array< ModelListConditionInput | null > | null,
  not?: ModelListConditionInput | null,
};

export type List = {
  __typename: "List",
  id: string,
  title: string,
  description?: string | null,
  author: string,
  image: string,
  createdAt: number,
  modifiedAt?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
  ListItems?: ModelListItemConnection | null,
};

export type ModelListItemConnection = {
  __typename: "ModelListItemConnection",
  items:  Array<ListItem | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateListInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  author?: string | null,
  image?: string | null,
  createdAt?: number | null,
  modifiedAt?: number | null,
  _version?: number | null,
};

export type DeleteListInput = {
  id: string,
  _version?: number | null,
};

export type CreatePodcastEpisodeInput = {
  id?: string | null,
  podcastSeasonID: string,
  title: string,
  description?: string | null,
  image?: string | null,
  link: string,
  author?: string | null,
  _version?: number | null,
};

export type ModelPodcastEpisodeConditionInput = {
  podcastSeasonID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  link?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelPodcastEpisodeConditionInput | null > | null,
  or?: Array< ModelPodcastEpisodeConditionInput | null > | null,
  not?: ModelPodcastEpisodeConditionInput | null,
};

export type PodcastEpisode = {
  __typename: "PodcastEpisode",
  id: string,
  podcastSeasonID: string,
  title: string,
  description?: string | null,
  image?: string | null,
  link: string,
  author?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePodcastEpisodeInput = {
  id: string,
  podcastSeasonID?: string | null,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  link?: string | null,
  author?: string | null,
  _version?: number | null,
};

export type DeletePodcastEpisodeInput = {
  id: string,
  _version?: number | null,
};

export type CreatePodcastSeasonInput = {
  id?: string | null,
  title: string,
  seasonLabel?: string | null,
  description?: string | null,
  author: string,
  image: string,
  year: number,
  _version?: number | null,
};

export type ModelPodcastSeasonConditionInput = {
  title?: ModelStringInput | null,
  seasonLabel?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  image?: ModelStringInput | null,
  year?: ModelIntInput | null,
  and?: Array< ModelPodcastSeasonConditionInput | null > | null,
  or?: Array< ModelPodcastSeasonConditionInput | null > | null,
  not?: ModelPodcastSeasonConditionInput | null,
};

export type PodcastSeason = {
  __typename: "PodcastSeason",
  id: string,
  title: string,
  seasonLabel?: string | null,
  description?: string | null,
  author: string,
  image: string,
  year: number,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  PodcastEpisodes?: ModelPodcastEpisodeConnection | null,
};

export type ModelPodcastEpisodeConnection = {
  __typename: "ModelPodcastEpisodeConnection",
  items:  Array<PodcastEpisode | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdatePodcastSeasonInput = {
  id: string,
  title?: string | null,
  seasonLabel?: string | null,
  description?: string | null,
  author?: string | null,
  image?: string | null,
  year?: number | null,
  _version?: number | null,
};

export type DeletePodcastSeasonInput = {
  id: string,
  _version?: number | null,
};

export type CreateReviewInput = {
  id?: string | null,
  title: string,
  artist: string,
  recordLabel?: string | null,
  content: string,
  image: string,
  author: string,
  createdAt?: number | null,
  updatedAt?: number | null,
  _version?: number | null,
};

export type ModelReviewConditionInput = {
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  recordLabel?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  title: string,
  artist: string,
  recordLabel?: string | null,
  content: string,
  image: string,
  author: string,
  createdAt?: number | null,
  updatedAt?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateReviewInput = {
  id: string,
  title?: string | null,
  artist?: string | null,
  recordLabel?: string | null,
  content?: string | null,
  image?: string | null,
  author?: string | null,
  createdAt?: number | null,
  updatedAt?: number | null,
  _version?: number | null,
};

export type DeleteReviewInput = {
  id: string,
  _version?: number | null,
};

export type ModelFeatureFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  image?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  modifiedAt?: ModelIntInput | null,
  and?: Array< ModelFeatureFilterInput | null > | null,
  or?: Array< ModelFeatureFilterInput | null > | null,
  not?: ModelFeatureFilterInput | null,
};

export type ModelFeatureConnection = {
  __typename: "ModelFeatureConnection",
  items:  Array<Feature | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelListItemFilterInput = {
  id?: ModelIDInput | null,
  rank?: ModelIntInput | null,
  artist?: ModelStringInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  content?: ModelStringInput | null,
  listID?: ModelIDInput | null,
  and?: Array< ModelListItemFilterInput | null > | null,
  or?: Array< ModelListItemFilterInput | null > | null,
  not?: ModelListItemFilterInput | null,
};

export type ModelListFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  modifiedAt?: ModelIntInput | null,
  and?: Array< ModelListFilterInput | null > | null,
  or?: Array< ModelListFilterInput | null > | null,
  not?: ModelListFilterInput | null,
};

export type ModelListConnection = {
  __typename: "ModelListConnection",
  items:  Array<List | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPodcastEpisodeFilterInput = {
  id?: ModelIDInput | null,
  podcastSeasonID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  link?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelPodcastEpisodeFilterInput | null > | null,
  or?: Array< ModelPodcastEpisodeFilterInput | null > | null,
  not?: ModelPodcastEpisodeFilterInput | null,
};

export type ModelPodcastSeasonFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  seasonLabel?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  image?: ModelStringInput | null,
  year?: ModelIntInput | null,
  and?: Array< ModelPodcastSeasonFilterInput | null > | null,
  or?: Array< ModelPodcastSeasonFilterInput | null > | null,
  not?: ModelPodcastSeasonFilterInput | null,
};

export type ModelPodcastSeasonConnection = {
  __typename: "ModelPodcastSeasonConnection",
  items:  Array<PodcastSeason | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  recordLabel?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateFeatureMutationVariables = {
  input: CreateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type CreateFeatureMutation = {
  createFeature?:  {
    __typename: "Feature",
    id: string,
    title: string,
    description?: string | null,
    author?: string | null,
    image: string,
    content: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type UpdateFeatureMutationVariables = {
  input: UpdateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type UpdateFeatureMutation = {
  updateFeature?:  {
    __typename: "Feature",
    id: string,
    title: string,
    description?: string | null,
    author?: string | null,
    image: string,
    content: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type DeleteFeatureMutationVariables = {
  input: DeleteFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type DeleteFeatureMutation = {
  deleteFeature?:  {
    __typename: "Feature",
    id: string,
    title: string,
    description?: string | null,
    author?: string | null,
    image: string,
    content: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type CreateListItemMutationVariables = {
  input: CreateListItemInput,
  condition?: ModelListItemConditionInput | null,
};

export type CreateListItemMutation = {
  createListItem?:  {
    __typename: "ListItem",
    id: string,
    rank?: number | null,
    artist?: string | null,
    title: string,
    image?: string | null,
    content: string,
    listID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateListItemMutationVariables = {
  input: UpdateListItemInput,
  condition?: ModelListItemConditionInput | null,
};

export type UpdateListItemMutation = {
  updateListItem?:  {
    __typename: "ListItem",
    id: string,
    rank?: number | null,
    artist?: string | null,
    title: string,
    image?: string | null,
    content: string,
    listID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteListItemMutationVariables = {
  input: DeleteListItemInput,
  condition?: ModelListItemConditionInput | null,
};

export type DeleteListItemMutation = {
  deleteListItem?:  {
    __typename: "ListItem",
    id: string,
    rank?: number | null,
    artist?: string | null,
    title: string,
    image?: string | null,
    content: string,
    listID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateListMutationVariables = {
  input: CreateListInput,
  condition?: ModelListConditionInput | null,
};

export type CreateListMutation = {
  createList?:  {
    __typename: "List",
    id: string,
    title: string,
    description?: string | null,
    author: string,
    image: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    ListItems?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateListMutationVariables = {
  input: UpdateListInput,
  condition?: ModelListConditionInput | null,
};

export type UpdateListMutation = {
  updateList?:  {
    __typename: "List",
    id: string,
    title: string,
    description?: string | null,
    author: string,
    image: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    ListItems?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteListMutationVariables = {
  input: DeleteListInput,
  condition?: ModelListConditionInput | null,
};

export type DeleteListMutation = {
  deleteList?:  {
    __typename: "List",
    id: string,
    title: string,
    description?: string | null,
    author: string,
    image: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    ListItems?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreatePodcastEpisodeMutationVariables = {
  input: CreatePodcastEpisodeInput,
  condition?: ModelPodcastEpisodeConditionInput | null,
};

export type CreatePodcastEpisodeMutation = {
  createPodcastEpisode?:  {
    __typename: "PodcastEpisode",
    id: string,
    podcastSeasonID: string,
    title: string,
    description?: string | null,
    image?: string | null,
    link: string,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePodcastEpisodeMutationVariables = {
  input: UpdatePodcastEpisodeInput,
  condition?: ModelPodcastEpisodeConditionInput | null,
};

export type UpdatePodcastEpisodeMutation = {
  updatePodcastEpisode?:  {
    __typename: "PodcastEpisode",
    id: string,
    podcastSeasonID: string,
    title: string,
    description?: string | null,
    image?: string | null,
    link: string,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePodcastEpisodeMutationVariables = {
  input: DeletePodcastEpisodeInput,
  condition?: ModelPodcastEpisodeConditionInput | null,
};

export type DeletePodcastEpisodeMutation = {
  deletePodcastEpisode?:  {
    __typename: "PodcastEpisode",
    id: string,
    podcastSeasonID: string,
    title: string,
    description?: string | null,
    image?: string | null,
    link: string,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePodcastSeasonMutationVariables = {
  input: CreatePodcastSeasonInput,
  condition?: ModelPodcastSeasonConditionInput | null,
};

export type CreatePodcastSeasonMutation = {
  createPodcastSeason?:  {
    __typename: "PodcastSeason",
    id: string,
    title: string,
    seasonLabel?: string | null,
    description?: string | null,
    author: string,
    image: string,
    year: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PodcastEpisodes?:  {
      __typename: "ModelPodcastEpisodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdatePodcastSeasonMutationVariables = {
  input: UpdatePodcastSeasonInput,
  condition?: ModelPodcastSeasonConditionInput | null,
};

export type UpdatePodcastSeasonMutation = {
  updatePodcastSeason?:  {
    __typename: "PodcastSeason",
    id: string,
    title: string,
    seasonLabel?: string | null,
    description?: string | null,
    author: string,
    image: string,
    year: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PodcastEpisodes?:  {
      __typename: "ModelPodcastEpisodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeletePodcastSeasonMutationVariables = {
  input: DeletePodcastSeasonInput,
  condition?: ModelPodcastSeasonConditionInput | null,
};

export type DeletePodcastSeasonMutation = {
  deletePodcastSeason?:  {
    __typename: "PodcastSeason",
    id: string,
    title: string,
    seasonLabel?: string | null,
    description?: string | null,
    author: string,
    image: string,
    year: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PodcastEpisodes?:  {
      __typename: "ModelPodcastEpisodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    artist: string,
    recordLabel?: string | null,
    content: string,
    image: string,
    author: string,
    createdAt?: number | null,
    updatedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    artist: string,
    recordLabel?: string | null,
    content: string,
    image: string,
    author: string,
    createdAt?: number | null,
    updatedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    artist: string,
    recordLabel?: string | null,
    content: string,
    image: string,
    author: string,
    createdAt?: number | null,
    updatedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetFeatureQueryVariables = {
  id: string,
};

export type GetFeatureQuery = {
  getFeature?:  {
    __typename: "Feature",
    id: string,
    title: string,
    description?: string | null,
    author?: string | null,
    image: string,
    content: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type ListFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturesQuery = {
  listFeatures?:  {
    __typename: "ModelFeatureConnection",
    items:  Array< {
      __typename: "Feature",
      id: string,
      title: string,
      description?: string | null,
      author?: string | null,
      image: string,
      content: string,
      createdAt: number,
      modifiedAt?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFeaturesQuery = {
  syncFeatures?:  {
    __typename: "ModelFeatureConnection",
    items:  Array< {
      __typename: "Feature",
      id: string,
      title: string,
      description?: string | null,
      author?: string | null,
      image: string,
      content: string,
      createdAt: number,
      modifiedAt?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetListItemQueryVariables = {
  id: string,
};

export type GetListItemQuery = {
  getListItem?:  {
    __typename: "ListItem",
    id: string,
    rank?: number | null,
    artist?: string | null,
    title: string,
    image?: string | null,
    content: string,
    listID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListListItemsQueryVariables = {
  filter?: ModelListItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListItemsQuery = {
  listListItems?:  {
    __typename: "ModelListItemConnection",
    items:  Array< {
      __typename: "ListItem",
      id: string,
      rank?: number | null,
      artist?: string | null,
      title: string,
      image?: string | null,
      content: string,
      listID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncListItemsQueryVariables = {
  filter?: ModelListItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncListItemsQuery = {
  syncListItems?:  {
    __typename: "ModelListItemConnection",
    items:  Array< {
      __typename: "ListItem",
      id: string,
      rank?: number | null,
      artist?: string | null,
      title: string,
      image?: string | null,
      content: string,
      listID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetListQueryVariables = {
  id: string,
};

export type GetListQuery = {
  getList?:  {
    __typename: "List",
    id: string,
    title: string,
    description?: string | null,
    author: string,
    image: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    ListItems?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListListsQueryVariables = {
  filter?: ModelListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListsQuery = {
  listLists?:  {
    __typename: "ModelListConnection",
    items:  Array< {
      __typename: "List",
      id: string,
      title: string,
      description?: string | null,
      author: string,
      image: string,
      createdAt: number,
      modifiedAt?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncListsQueryVariables = {
  filter?: ModelListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncListsQuery = {
  syncLists?:  {
    __typename: "ModelListConnection",
    items:  Array< {
      __typename: "List",
      id: string,
      title: string,
      description?: string | null,
      author: string,
      image: string,
      createdAt: number,
      modifiedAt?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPodcastEpisodeQueryVariables = {
  id: string,
};

export type GetPodcastEpisodeQuery = {
  getPodcastEpisode?:  {
    __typename: "PodcastEpisode",
    id: string,
    podcastSeasonID: string,
    title: string,
    description?: string | null,
    image?: string | null,
    link: string,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPodcastEpisodesQueryVariables = {
  filter?: ModelPodcastEpisodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPodcastEpisodesQuery = {
  listPodcastEpisodes?:  {
    __typename: "ModelPodcastEpisodeConnection",
    items:  Array< {
      __typename: "PodcastEpisode",
      id: string,
      podcastSeasonID: string,
      title: string,
      description?: string | null,
      image?: string | null,
      link: string,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPodcastEpisodesQueryVariables = {
  filter?: ModelPodcastEpisodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPodcastEpisodesQuery = {
  syncPodcastEpisodes?:  {
    __typename: "ModelPodcastEpisodeConnection",
    items:  Array< {
      __typename: "PodcastEpisode",
      id: string,
      podcastSeasonID: string,
      title: string,
      description?: string | null,
      image?: string | null,
      link: string,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPodcastSeasonQueryVariables = {
  id: string,
};

export type GetPodcastSeasonQuery = {
  getPodcastSeason?:  {
    __typename: "PodcastSeason",
    id: string,
    title: string,
    seasonLabel?: string | null,
    description?: string | null,
    author: string,
    image: string,
    year: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PodcastEpisodes?:  {
      __typename: "ModelPodcastEpisodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListPodcastSeasonsQueryVariables = {
  filter?: ModelPodcastSeasonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPodcastSeasonsQuery = {
  listPodcastSeasons?:  {
    __typename: "ModelPodcastSeasonConnection",
    items:  Array< {
      __typename: "PodcastSeason",
      id: string,
      title: string,
      seasonLabel?: string | null,
      description?: string | null,
      author: string,
      image: string,
      year: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPodcastSeasonsQueryVariables = {
  filter?: ModelPodcastSeasonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPodcastSeasonsQuery = {
  syncPodcastSeasons?:  {
    __typename: "ModelPodcastSeasonConnection",
    items:  Array< {
      __typename: "PodcastSeason",
      id: string,
      title: string,
      seasonLabel?: string | null,
      description?: string | null,
      author: string,
      image: string,
      year: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    artist: string,
    recordLabel?: string | null,
    content: string,
    image: string,
    author: string,
    createdAt?: number | null,
    updatedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      title: string,
      artist: string,
      recordLabel?: string | null,
      content: string,
      image: string,
      author: string,
      createdAt?: number | null,
      updatedAt?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncReviewsQuery = {
  syncReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      title: string,
      artist: string,
      recordLabel?: string | null,
      content: string,
      image: string,
      author: string,
      createdAt?: number | null,
      updatedAt?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateFeatureSubscription = {
  onCreateFeature?:  {
    __typename: "Feature",
    id: string,
    title: string,
    description?: string | null,
    author?: string | null,
    image: string,
    content: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeatureSubscription = {
  onUpdateFeature?:  {
    __typename: "Feature",
    id: string,
    title: string,
    description?: string | null,
    author?: string | null,
    image: string,
    content: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeatureSubscription = {
  onDeleteFeature?:  {
    __typename: "Feature",
    id: string,
    title: string,
    description?: string | null,
    author?: string | null,
    image: string,
    content: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnCreateListItemSubscription = {
  onCreateListItem?:  {
    __typename: "ListItem",
    id: string,
    rank?: number | null,
    artist?: string | null,
    title: string,
    image?: string | null,
    content: string,
    listID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateListItemSubscription = {
  onUpdateListItem?:  {
    __typename: "ListItem",
    id: string,
    rank?: number | null,
    artist?: string | null,
    title: string,
    image?: string | null,
    content: string,
    listID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteListItemSubscription = {
  onDeleteListItem?:  {
    __typename: "ListItem",
    id: string,
    rank?: number | null,
    artist?: string | null,
    title: string,
    image?: string | null,
    content: string,
    listID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateListSubscription = {
  onCreateList?:  {
    __typename: "List",
    id: string,
    title: string,
    description?: string | null,
    author: string,
    image: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    ListItems?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateListSubscription = {
  onUpdateList?:  {
    __typename: "List",
    id: string,
    title: string,
    description?: string | null,
    author: string,
    image: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    ListItems?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteListSubscription = {
  onDeleteList?:  {
    __typename: "List",
    id: string,
    title: string,
    description?: string | null,
    author: string,
    image: string,
    createdAt: number,
    modifiedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    ListItems?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreatePodcastEpisodeSubscription = {
  onCreatePodcastEpisode?:  {
    __typename: "PodcastEpisode",
    id: string,
    podcastSeasonID: string,
    title: string,
    description?: string | null,
    image?: string | null,
    link: string,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePodcastEpisodeSubscription = {
  onUpdatePodcastEpisode?:  {
    __typename: "PodcastEpisode",
    id: string,
    podcastSeasonID: string,
    title: string,
    description?: string | null,
    image?: string | null,
    link: string,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePodcastEpisodeSubscription = {
  onDeletePodcastEpisode?:  {
    __typename: "PodcastEpisode",
    id: string,
    podcastSeasonID: string,
    title: string,
    description?: string | null,
    image?: string | null,
    link: string,
    author?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePodcastSeasonSubscription = {
  onCreatePodcastSeason?:  {
    __typename: "PodcastSeason",
    id: string,
    title: string,
    seasonLabel?: string | null,
    description?: string | null,
    author: string,
    image: string,
    year: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PodcastEpisodes?:  {
      __typename: "ModelPodcastEpisodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdatePodcastSeasonSubscription = {
  onUpdatePodcastSeason?:  {
    __typename: "PodcastSeason",
    id: string,
    title: string,
    seasonLabel?: string | null,
    description?: string | null,
    author: string,
    image: string,
    year: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PodcastEpisodes?:  {
      __typename: "ModelPodcastEpisodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeletePodcastSeasonSubscription = {
  onDeletePodcastSeason?:  {
    __typename: "PodcastSeason",
    id: string,
    title: string,
    seasonLabel?: string | null,
    description?: string | null,
    author: string,
    image: string,
    year: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PodcastEpisodes?:  {
      __typename: "ModelPodcastEpisodeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    artist: string,
    recordLabel?: string | null,
    content: string,
    image: string,
    author: string,
    createdAt?: number | null,
    updatedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    artist: string,
    recordLabel?: string | null,
    content: string,
    image: string,
    author: string,
    createdAt?: number | null,
    updatedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    title: string,
    artist: string,
    recordLabel?: string | null,
    content: string,
    image: string,
    author: string,
    createdAt?: number | null,
    updatedAt?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
