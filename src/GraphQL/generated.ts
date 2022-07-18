import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  success: Scalars['Boolean'];
};

export type Cookie = {
  __typename?: 'Cookie';
  domain: Scalars['String'];
  expirationDate?: Maybe<Scalars['Float']>;
  hostOnly?: Maybe<Scalars['Boolean']>;
  httpOnly?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  sameSite?: Maybe<Scalars['String']>;
  secure?: Maybe<Scalars['Boolean']>;
  session?: Maybe<Scalars['Boolean']>;
  storeId?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type CookieCollection = {
  __typename?: 'CookieCollection';
  _id?: Maybe<Scalars['ID']>;
  cookies: Array<Cookie>;
  domain: Scalars['String'];
  email: Scalars['String'];
  iv?: Maybe<Scalars['String']>;
  orgId: Scalars['String'];
};

export type CookieDomains = {
  __typename?: 'CookieDomains';
  domain: Scalars['String'];
  email: Scalars['String'];
  orgId: Scalars['String'];
};

export type CreateCookieInput = {
  domain: Scalars['String'];
  expirationDate?: InputMaybe<Scalars['Float']>;
  hostOnly?: InputMaybe<Scalars['Boolean']>;
  httpOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  sameSite?: InputMaybe<Scalars['String']>;
  secure?: InputMaybe<Scalars['Boolean']>;
  session?: InputMaybe<Scalars['Boolean']>;
  storeId?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export type CreateEmployeeInput = {
  departments?: InputMaybe<Array<DepartmentInput>>;
  hireDate: Scalars['Date'];
  name: Scalars['String'];
  position: Scalars['String'];
};

export type CreateOrganisationInput = {
  industryType: Scalars['String'];
  name: Scalars['String'];
  planTier: Scalars['String'];
};

export type Department = {
  __typename?: 'Department';
  name: Scalars['String'];
};

export type DepartmentInput = {
  name: Scalars['String'];
};

export type Employee = {
  __typename?: 'Employee';
  _id?: Maybe<Scalars['ID']>;
  departments?: Maybe<Array<Department>>;
  endDate?: Maybe<Scalars['Date']>;
  hireDate: Scalars['Date'];
  name: Scalars['String'];
  position: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: AuthenticateResponse;
  createEmployee?: Maybe<Employee>;
  createOrganisation: Organisation;
  upsertCookie?: Maybe<CookieCollection>;
};


export type MutationAuthenticateArgs = {
  token: Scalars['String'];
};


export type MutationCreateEmployeeArgs = {
  employee?: InputMaybe<CreateEmployeeInput>;
};


export type MutationCreateOrganisationArgs = {
  organisation?: InputMaybe<CreateOrganisationInput>;
};


export type MutationUpsertCookieArgs = {
  cookies: Array<CreateCookieInput>;
  domain: Scalars['String'];
  email: Scalars['String'];
  orgId: Scalars['String'];
};

export type Organisation = {
  __typename?: 'Organisation';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  industryType: Scalars['String'];
  name: Scalars['String'];
  planTier: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  findEmployeeById?: Maybe<Employee>;
  findOrganisationById: Organisation;
  getCookiesByOrgId: Array<CookieCollection>;
  getSupportedDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  getUnsupportedDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryFindEmployeeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindOrganisationByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCookiesByOrgIdArgs = {
  orgId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type CreateOrganisationMutationVariables = Exact<{
  organisation?: InputMaybe<CreateOrganisationInput>;
}>;


export type CreateOrganisationMutation = { __typename?: 'Mutation', createOrganisation: { __typename?: 'Organisation', _id?: string | null, name: string, industryType: string, planTier: string } };

export type GetCookiesByOrgIdQueryVariables = Exact<{
  orgId: Scalars['String'];
}>;


export type GetCookiesByOrgIdQuery = { __typename?: 'Query', getCookiesByOrgId: Array<{ __typename?: 'CookieCollection', orgId: string, domain: string, email: string }> };

export type GetOrganisationByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrganisationByIdQuery = { __typename?: 'Query', findOrganisationById: { __typename?: 'Organisation', _id?: string | null, name: string, industryType: string, planTier: string } };


export const CreateOrganisationDocument = gql`
    mutation createOrganisation($organisation: CreateOrganisationInput) {
  createOrganisation(organisation: $organisation) {
    _id
    name
    industryType
    planTier
  }
}
    `;
export type CreateOrganisationMutationFn = Apollo.MutationFunction<CreateOrganisationMutation, CreateOrganisationMutationVariables>;

/**
 * __useCreateOrganisationMutation__
 *
 * To run a mutation, you first call `useCreateOrganisationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganisationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganisationMutation, { data, loading, error }] = useCreateOrganisationMutation({
 *   variables: {
 *      organisation: // value for 'organisation'
 *   },
 * });
 */
export function useCreateOrganisationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrganisationMutation, CreateOrganisationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrganisationMutation, CreateOrganisationMutationVariables>(CreateOrganisationDocument, options);
      }
export type CreateOrganisationMutationHookResult = ReturnType<typeof useCreateOrganisationMutation>;
export type CreateOrganisationMutationResult = Apollo.MutationResult<CreateOrganisationMutation>;
export type CreateOrganisationMutationOptions = Apollo.BaseMutationOptions<CreateOrganisationMutation, CreateOrganisationMutationVariables>;
export const GetCookiesByOrgIdDocument = gql`
    query getCookiesByOrgId($orgId: String!) {
  getCookiesByOrgId(orgId: $orgId) {
    orgId
    domain
    email
  }
}
    `;

/**
 * __useGetCookiesByOrgIdQuery__
 *
 * To run a query within a React component, call `useGetCookiesByOrgIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCookiesByOrgIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCookiesByOrgIdQuery({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useGetCookiesByOrgIdQuery(baseOptions: Apollo.QueryHookOptions<GetCookiesByOrgIdQuery, GetCookiesByOrgIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCookiesByOrgIdQuery, GetCookiesByOrgIdQueryVariables>(GetCookiesByOrgIdDocument, options);
      }
export function useGetCookiesByOrgIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCookiesByOrgIdQuery, GetCookiesByOrgIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCookiesByOrgIdQuery, GetCookiesByOrgIdQueryVariables>(GetCookiesByOrgIdDocument, options);
        }
export type GetCookiesByOrgIdQueryHookResult = ReturnType<typeof useGetCookiesByOrgIdQuery>;
export type GetCookiesByOrgIdLazyQueryHookResult = ReturnType<typeof useGetCookiesByOrgIdLazyQuery>;
export type GetCookiesByOrgIdQueryResult = Apollo.QueryResult<GetCookiesByOrgIdQuery, GetCookiesByOrgIdQueryVariables>;
export const GetOrganisationByIdDocument = gql`
    query getOrganisationById($id: ID!) {
  findOrganisationById(id: $id) {
    _id
    name
    industryType
    planTier
  }
}
    `;

/**
 * __useGetOrganisationByIdQuery__
 *
 * To run a query within a React component, call `useGetOrganisationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganisationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganisationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrganisationByIdQuery(baseOptions: Apollo.QueryHookOptions<GetOrganisationByIdQuery, GetOrganisationByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganisationByIdQuery, GetOrganisationByIdQueryVariables>(GetOrganisationByIdDocument, options);
      }
export function useGetOrganisationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganisationByIdQuery, GetOrganisationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganisationByIdQuery, GetOrganisationByIdQueryVariables>(GetOrganisationByIdDocument, options);
        }
export type GetOrganisationByIdQueryHookResult = ReturnType<typeof useGetOrganisationByIdQuery>;
export type GetOrganisationByIdLazyQueryHookResult = ReturnType<typeof useGetOrganisationByIdLazyQuery>;
export type GetOrganisationByIdQueryResult = Apollo.QueryResult<GetOrganisationByIdQuery, GetOrganisationByIdQueryVariables>;