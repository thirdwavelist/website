import * as React from 'react';
import { useCafeListQuery } from '../../generated/graphql';
import CafeList, { OwnProps } from './CafeList';

const CafeListContainer = (props: OwnProps) => {
  const { data, error, loading } = useCafeListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <CafeList data={data} {...props} />;
};

export default CafeListContainer;