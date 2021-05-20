import { Spinner } from 'react-bootstrap';
import { useCafeListQuery } from '../../generated/graphql';
import CafeList, { OwnProps } from './CafeList';

const CafeListContainer = (props: OwnProps) => {
  const { data, error, loading } = useCafeListQuery();

  if (loading) {
    return <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <CafeList data={data} {...props} />;
};

export default CafeListContainer;