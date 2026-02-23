// @ts-nocheck
import { gql } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  _Any: { input: any; output: any };
  _FieldSet: { input: any; output: any };
};

export type Author = {
  __typename?: 'Author';
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Book = {
  __typename?: 'Book';
  _id: Scalars['ID']['output'];
  author: Author;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
  deleteAuthor: Author;
  deleteBook: Book;
  updateAuthor: Author;
  updateBook: Book;
};

export type MutationCreateAuthorArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateBookArgs = {
  authorId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type MutationDeleteAuthorArgs = {
  _id: Scalars['ID']['input'];
};

export type MutationDeleteBookArgs = {
  _id: Scalars['ID']['input'];
};

export type MutationUpdateAuthorArgs = {
  _id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateBookArgs = {
  _id: Scalars['ID']['input'];
  authorId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  getAuthor: Author;
  getAuthors: Array<Author>;
  getBook: Book;
  getBooks: Array<Book>;
};

export type QueryGetAuthorArgs = {
  _id: Scalars['ID']['input'];
};

export type QueryGetBookArgs = {
  _id: Scalars['ID']['input'];
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type GetAuthorQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetAuthorQuery = {
  __typename?: 'Query';
  getAuthor: { __typename?: 'Author'; _id: string; name: string };
};

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAuthorsQuery = {
  __typename?: 'Query';
  getAuthors: Array<{ __typename?: 'Author'; _id: string; name: string }>;
};

export type UpdateAuthorMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type UpdateAuthorMutation = {
  __typename?: 'Mutation';
  updateAuthor: { __typename?: 'Author'; _id: string; name: string };
};

export type CreateAuthorMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type CreateAuthorMutation = {
  __typename?: 'Mutation';
  createAuthor: { __typename?: 'Author'; _id: string; name: string };
};

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteBookMutation = {
  __typename?: 'Mutation';
  deleteBook: {
    __typename?: 'Book';
    _id: string;
    title: string;
    author: { __typename?: 'Author'; _id: string; name: string };
  };
};

export type GetBookQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetBookQuery = {
  __typename?: 'Query';
  getBook: {
    __typename?: 'Book';
    _id: string;
    title: string;
    author: { __typename?: 'Author'; _id: string; name: string };
  };
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBooksQuery = {
  __typename?: 'Query';
  getBooks: Array<{
    __typename?: 'Book';
    _id: string;
    title: string;
    author: { __typename?: 'Author'; _id: string; name: string };
  }>;
};

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  authorId: Scalars['ID']['input'];
}>;

export type UpdateBookMutation = {
  __typename?: 'Mutation';
  updateBook: {
    __typename?: 'Book';
    _id: string;
    title: string;
    author: { __typename?: 'Author'; _id: string; name: string };
  };
};

export type CreateBookMutationVariables = Exact<{
  title: Scalars['String']['input'];
  authorId: Scalars['ID']['input'];
}>;

export type CreateBookMutation = {
  __typename?: 'Mutation';
  createBook: {
    __typename?: 'Book';
    _id: string;
    title: string;
    author: { __typename?: 'Author'; _id: string; name: string };
  };
};

export const GetAuthorDocument = gql`
  query GetAuthor($id: ID!) {
    getAuthor(_id: $id) {
      _id
      name
    }
  }
`;

/**
 * __useGetAuthorQuery__
 *
 * To run a query within a React component, call `useGetAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAuthorQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAuthorQuery,
    GetAuthorQueryVariables
  > &
    (
      | { variables: GetAuthorQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAuthorQuery, GetAuthorQueryVariables>(
    GetAuthorDocument,
    options,
  );
}
export function useGetAuthorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAuthorQuery,
    GetAuthorQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAuthorQuery, GetAuthorQueryVariables>(
    GetAuthorDocument,
    options,
  );
}
// @ts-ignore
export function useGetAuthorSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAuthorQuery,
    GetAuthorQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<GetAuthorQuery, GetAuthorQueryVariables>;
export function useGetAuthorSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>,
): Apollo.UseSuspenseQueryResult<
  GetAuthorQuery | undefined,
  GetAuthorQueryVariables
>;
export function useGetAuthorSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAuthorQuery, GetAuthorQueryVariables>(
    GetAuthorDocument,
    options,
  );
}
export type GetAuthorQueryHookResult = ReturnType<typeof useGetAuthorQuery>;
export type GetAuthorLazyQueryHookResult = ReturnType<
  typeof useGetAuthorLazyQuery
>;
export type GetAuthorSuspenseQueryHookResult = ReturnType<
  typeof useGetAuthorSuspenseQuery
>;
export type GetAuthorQueryResult = Apollo.QueryResult<
  GetAuthorQuery,
  GetAuthorQueryVariables
>;
export const GetAuthorsDocument = gql`
  query GetAuthors {
    getAuthors {
      _id
      name
    }
  }
`;

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAuthorsQuery,
    GetAuthorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(
    GetAuthorsDocument,
    options,
  );
}
export function useGetAuthorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAuthorsQuery,
    GetAuthorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(
    GetAuthorsDocument,
    options,
  );
}
// @ts-ignore
export function useGetAuthorsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAuthorsQuery,
    GetAuthorsQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<GetAuthorsQuery, GetAuthorsQueryVariables>;
export function useGetAuthorsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAuthorsQuery,
        GetAuthorsQueryVariables
      >,
): Apollo.UseSuspenseQueryResult<
  GetAuthorsQuery | undefined,
  GetAuthorsQueryVariables
>;
export function useGetAuthorsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAuthorsQuery,
        GetAuthorsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(
    GetAuthorsDocument,
    options,
  );
}
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>;
export type GetAuthorsLazyQueryHookResult = ReturnType<
  typeof useGetAuthorsLazyQuery
>;
export type GetAuthorsSuspenseQueryHookResult = ReturnType<
  typeof useGetAuthorsSuspenseQuery
>;
export type GetAuthorsQueryResult = Apollo.QueryResult<
  GetAuthorsQuery,
  GetAuthorsQueryVariables
>;
export const UpdateAuthorDocument = gql`
  mutation UpdateAuthor($id: ID!, $name: String!) {
    updateAuthor(_id: $id, name: $name) {
      _id
      name
    }
  }
`;
export type UpdateAuthorMutationFn = Apollo.MutationFunction<
  UpdateAuthorMutation,
  UpdateAuthorMutationVariables
>;

/**
 * __useUpdateAuthorMutation__
 *
 * To run a mutation, you first call `useUpdateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuthorMutation, { data, loading, error }] = useUpdateAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateAuthorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAuthorMutation,
    UpdateAuthorMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateAuthorMutation,
    UpdateAuthorMutationVariables
  >(UpdateAuthorDocument, options);
}
export type UpdateAuthorMutationHookResult = ReturnType<
  typeof useUpdateAuthorMutation
>;
export type UpdateAuthorMutationResult =
  Apollo.MutationResult<UpdateAuthorMutation>;
export type UpdateAuthorMutationOptions = Apollo.BaseMutationOptions<
  UpdateAuthorMutation,
  UpdateAuthorMutationVariables
>;
export const CreateAuthorDocument = gql`
  mutation CreateAuthor($name: String!) {
    createAuthor(name: $name) {
      _id
      name
    }
  }
`;
export type CreateAuthorMutationFn = Apollo.MutationFunction<
  CreateAuthorMutation,
  CreateAuthorMutationVariables
>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateAuthorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAuthorMutation,
    CreateAuthorMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateAuthorMutation,
    CreateAuthorMutationVariables
  >(CreateAuthorDocument, options);
}
export type CreateAuthorMutationHookResult = ReturnType<
  typeof useCreateAuthorMutation
>;
export type CreateAuthorMutationResult =
  Apollo.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<
  CreateAuthorMutation,
  CreateAuthorMutationVariables
>;
export const DeleteBookDocument = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(_id: $id) {
      _id
      title
      author {
        _id
        name
      }
    }
  }
`;
export type DeleteBookMutationFn = Apollo.MutationFunction<
  DeleteBookMutation,
  DeleteBookMutationVariables
>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBookMutation,
    DeleteBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(
    DeleteBookDocument,
    options,
  );
}
export type DeleteBookMutationHookResult = ReturnType<
  typeof useDeleteBookMutation
>;
export type DeleteBookMutationResult =
  Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<
  DeleteBookMutation,
  DeleteBookMutationVariables
>;
export const GetBookDocument = gql`
  query GetBook($id: ID!) {
    getBook(_id: $id) {
      _id
      title
      author {
        _id
        name
      }
    }
  }
`;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookQuery(
  baseOptions: Apollo.QueryHookOptions<GetBookQuery, GetBookQueryVariables> &
    ({ variables: GetBookQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBookQuery, GetBookQueryVariables>(
    GetBookDocument,
    options,
  );
}
export function useGetBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBookQuery,
    GetBookQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBookQuery, GetBookQueryVariables>(
    GetBookDocument,
    options,
  );
}
// @ts-ignore
export function useGetBookSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBookQuery,
    GetBookQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<GetBookQuery, GetBookQueryVariables>;
export function useGetBookSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetBookQuery, GetBookQueryVariables>,
): Apollo.UseSuspenseQueryResult<
  GetBookQuery | undefined,
  GetBookQueryVariables
>;
export function useGetBookSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetBookQuery, GetBookQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetBookQuery, GetBookQueryVariables>(
    GetBookDocument,
    options,
  );
}
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookSuspenseQueryHookResult = ReturnType<
  typeof useGetBookSuspenseQuery
>;
export type GetBookQueryResult = Apollo.QueryResult<
  GetBookQuery,
  GetBookQueryVariables
>;
export const GetBooksDocument = gql`
  query GetBooks {
    getBooks {
      _id
      title
      author {
        _id
        name
      }
    }
  }
`;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(
    GetBooksDocument,
    options,
  );
}
export function useGetBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBooksQuery,
    GetBooksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(
    GetBooksDocument,
    options,
  );
}
// @ts-ignore
export function useGetBooksSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBooksQuery,
    GetBooksQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<GetBooksQuery, GetBooksQueryVariables>;
export function useGetBooksSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>,
): Apollo.UseSuspenseQueryResult<
  GetBooksQuery | undefined,
  GetBooksQueryVariables
>;
export function useGetBooksSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetBooksQuery, GetBooksQueryVariables>(
    GetBooksDocument,
    options,
  );
}
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<
  typeof useGetBooksLazyQuery
>;
export type GetBooksSuspenseQueryHookResult = ReturnType<
  typeof useGetBooksSuspenseQuery
>;
export type GetBooksQueryResult = Apollo.QueryResult<
  GetBooksQuery,
  GetBooksQueryVariables
>;
export const UpdateBookDocument = gql`
  mutation UpdateBook($id: ID!, $title: String!, $authorId: ID!) {
    updateBook(_id: $id, title: $title, authorId: $authorId) {
      _id
      title
      author {
        _id
        name
      }
    }
  }
`;
export type UpdateBookMutationFn = Apollo.MutationFunction<
  UpdateBookMutation,
  UpdateBookMutationVariables
>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useUpdateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBookMutation,
    UpdateBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(
    UpdateBookDocument,
    options,
  );
}
export type UpdateBookMutationHookResult = ReturnType<
  typeof useUpdateBookMutation
>;
export type UpdateBookMutationResult =
  Apollo.MutationResult<UpdateBookMutation>;
export type UpdateBookMutationOptions = Apollo.BaseMutationOptions<
  UpdateBookMutation,
  UpdateBookMutationVariables
>;
export const CreateBookDocument = gql`
  mutation CreateBook($title: String!, $authorId: ID!) {
    createBook(title: $title, authorId: $authorId) {
      _id
      title
      author {
        _id
        name
      }
    }
  }
`;
export type CreateBookMutationFn = Apollo.MutationFunction<
  CreateBookMutation,
  CreateBookMutationVariables
>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useCreateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBookMutation,
    CreateBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(
    CreateBookDocument,
    options,
  );
}
export type CreateBookMutationHookResult = ReturnType<
  typeof useCreateBookMutation
>;
export type CreateBookMutationResult =
  Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<
  CreateBookMutation,
  CreateBookMutationVariables
>;
