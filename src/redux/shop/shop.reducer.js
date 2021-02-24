import ShopActionsType from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false, // reducer 다른 부분들이 data가 fetch 중인지 판단하는 요소로 작용
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionsType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionsType.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload, // error message string
      };
    default:
      return state;
  }
};

export default shopReducer;
