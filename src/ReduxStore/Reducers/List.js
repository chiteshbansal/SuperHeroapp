import * as actionTypes from "../Actions/actionTypes";

const initState = {
  Mylist: [],
  FavoriteList: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MYLIST_DEFAULT_ITEMS_SUCCESS:
      return {
        ...state,
        Mylist: action.MyList,
      };
    case actionTypes.ADD_SUPERHERO_TO_MYLIST:
      let UpdatedMylist = [...state.Mylist];
      UpdatedMylist.push(action.SuperHero);
      return {
        ...state,
        Mylist: UpdatedMylist,
      };
    case actionTypes.REMOVE_SUPERHERO_FROM_MYLIST_SUCCESS: {
      let UpdatedMylist = state.Mylist.filter((item) => {
        return item.id !== action.SuperHeroId;
      });
      return {
        ...state,
        Mylist: UpdatedMylist,
      };
    }
    case actionTypes.ADD_SUPERHERO_TO_FAVLIST: {
      let UpdatedMylist = [...state.FavoriteList];
      UpdatedMylist.push(action.SuperHero);
      return {
        ...state,
        FavoriteList: UpdatedMylist,
      };
    }
    case actionTypes.REMOVE_SUPERHERO_FROM_FAVLIST: {
      let UpdatedMylist = state.FavoriteList.filter((item) => {
        return item.id !== action.SuperHeroId;
      });
      return {
        ...state,
        FavoriteList: UpdatedMylist,
      };
    }
  }
};

export default reducer;
