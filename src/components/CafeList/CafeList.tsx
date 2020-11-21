import * as React from 'react';
import { ListGroup } from 'react-bootstrap';
import { CafeListQuery } from '../../generated/graphql';

export interface OwnProps {
}

interface Props extends OwnProps {
  data: CafeListQuery;
}

const CafeList: React.FC<Props> = ({ data }) => (
  <ListGroup>
      {!!data.cafes &&
        data.cafes.map(
          (cafe, i) => 
            !!cafe && (
              <ListGroup.Item key={i}>
                {cafe.name}
              </ListGroup.Item>
            ),
        )}
  </ListGroup>
);

export default CafeList;