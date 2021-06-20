/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReviewInput = {
  id?: string | null,
  title: string,
  artist: string,
  recordLabel?: string | null,
  content: string,
  src: string,
  author: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelReviewConditionInput = {
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  recordLabel?: ModelStringInput | null,
  content?: ModelStringInput | null,
  src?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
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

export type Review = {
  __typename: "Review",
  id: string,
  title: string,
  artist: string,
  recordLabel?: string | null,
  content: string,
  src: string,
  author: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateReviewInput = {
  id: string,
  title?: string | null,
  artist?: string | null,
  recordLabel?: string | null,
  content?: string | null,
  src?: string | null,
  author?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  recordLabel?: ModelStringInput | null,
  content?: ModelStringInput | null,
  src?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
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

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items?:  Array<Review | null > | null,
  nextToken?: string | null,
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
    src: string,
    author: string,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    src: string,
    author: string,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    src: string,
    author: string,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    src: string,
    author: string,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    items?:  Array< {
      __typename: "Review",
      id: string,
      title: string,
      artist: string,
      recordLabel?: string | null,
      content: string,
      src: string,
      author: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
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
    src: string,
    author: string,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    src: string,
    author: string,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    src: string,
    author: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
