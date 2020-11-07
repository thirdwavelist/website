import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** JavaScript Date object as an ISO timestamp */
  ISODate: any;
};

export type Query = {
  __typename?: 'Query';
  cafes: Array<Cafe>;
  cafe?: Maybe<Cafe>;
  roasters: Array<Roaster>;
  roaster?: Maybe<Roaster>;
};


export type QueryCafesArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryCafeArgs = {
  id: Scalars['String'];
};


export type QueryRoastersArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryRoasterArgs = {
  id: Scalars['String'];
};

export type Cafe = {
  __typename?: 'Cafe';
  id: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  homepageUrl?: Maybe<Scalars['String']>;
  hasEspresso: Scalars['Boolean'];
  hasAeropress: Scalars['Boolean'];
  hasPourover: Scalars['Boolean'];
  hasColdbrew: Scalars['Boolean'];
  hasFullImmersion: Scalars['Boolean'];
  espressoMachine?: Maybe<Scalars['String']>;
  grinder?: Maybe<Scalars['String']>;
  immersiveGear?: Maybe<Scalars['String']>;
  pouroverGear?: Maybe<Scalars['String']>;
  roasters?: Maybe<Scalars['String']>;
  hasLightRoast: Scalars['Boolean'];
  hasMediumRoast: Scalars['Boolean'];
  hasDarkRoast: Scalars['Boolean'];
  hasSingleOrigin: Scalars['Boolean'];
  hasBlend: Scalars['Boolean'];
  googlePlaceId: Scalars['String'];
  instagramPlaceId: Scalars['String'];
  lat: Scalars['String'];
  lng: Scalars['String'];
  created: Scalars['ISODate'];
  lastUpdated: Scalars['ISODate'];
};


export type Roaster = {
  __typename?: 'Roaster';
  id: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  instagramId?: Maybe<Scalars['String']>;
  googlePlaceId?: Maybe<Scalars['String']>;
};

export type CafeListQueryVariables = Exact<{ [key: string]: never; }>;


export type CafeListQuery = (
  { __typename?: 'Query' }
& { cafes: Array<(
    { __typename?: 'Cafe' }
    & Pick<Cafe, 'id' | 'name' | 'address' | 'thumbnailUrl'>
  )> }
);


export const CafeListDocument = gql`
    query CafeList {
  cafes {
    id
    name
    address
    thumbnailUrl
  }
}
    `;

/**
 * __useCafeListQuery__
 *
 * To run a query within a React component, call `useCafeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCafeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCafeListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCafeListQuery(baseOptions?: Apollo.QueryHookOptions<CafeListQuery, CafeListQueryVariables>) {
        return Apollo.useQuery<CafeListQuery, CafeListQueryVariables>(CafeListDocument, baseOptions);
      }
export function useCafeListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CafeListQuery, CafeListQueryVariables>) {
          return Apollo.useLazyQuery<CafeListQuery, CafeListQueryVariables>(CafeListDocument, baseOptions);
        }
export type CafeListQueryHookResult = ReturnType<typeof useCafeListQuery>;
export type CafeListLazyQueryHookResult = ReturnType<typeof useCafeListLazyQuery>;
export type CafeListQueryResult = Apollo.QueryResult<CafeListQuery, CafeListQueryVariables>;