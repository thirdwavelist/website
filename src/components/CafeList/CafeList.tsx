import * as React from 'react';
import { CafeListQuery } from '../../generated/graphql';

export interface OwnProps {
}

interface Props extends OwnProps {
  data: CafeListQuery;
}

const CafeList: React.FC<Props> = ({ data }) => (
  <div>
    <h3>Cafes</h3>
    <ol>
      {!!data.cafes &&
        data.cafes.map(
          (cafe, i) => 
            !!cafe && (
              <li key={i}>
                {cafe.name} - {cafe.address}
              </li>
            ),
        )}
    </ol>
  </div>
);

export default CafeList;