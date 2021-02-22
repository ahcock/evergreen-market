import React from 'react';
// import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  Title,
  ItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // createSelector를 리턴하기 때문에 (state)를 넣어서 한번 더 실행시켜주는 것.
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
