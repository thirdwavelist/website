import gql from 'graphql-tag';

export const QUERY_CAFE_LIST = gql`
query CafeList {
    cafes {
        id
        name
        address
        thumbnailUrl
        __typename
    }
}
`;