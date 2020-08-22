import * as actionTypes from "./actionTypes";
import Axios from "axios";
import { act } from "react-dom/test-utils";

export const fetchMyListDefaultItemsStart = () => {
  return {
    type: actionTypes.FETCH_MYLIST_DEFAULT_ITEMS_START,
  };
};
export const fetchMyListDefaultItemsSuccess = (MyList) => {
  return {
    type: actionTypes.FETCH_MYLIST_DEFAULT_ITEMS_SUCCESS,
    MyList: MyList,
  };
};
export const fetchMyListDefaultItemsFail = (error) => {
  return {
    type: actionTypes.FETCH_MYLIST_DEFAULT_ITEMS_FAIL,
    error: error,
  };
};

export const fetchMylistDefaultItems = () => {
  return (dispatch) => {
    console.log("dispatch is ", dispatch);
    Axios.get(
      "https://www.superheroapi.com/api.php/10219177700206566/search/batman"
    )
      .then((result) => {
        console.log("result data is ", result.data);
        dispatch(fetchMyListDefaultItemsSuccess(result.data.results));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchMyListDefaultItemsFail(error));
      });
  };
};

export const addSuperHeroToMylist = (SuperHero) => {
  return {
    type: actionTypes.ADD_SUPERHERO_TO_MYLIST,
    SuperHero: SuperHero,
  };
};
export const addSuperHeroToFavList = (SuperHero) => {
  return {
    type: actionTypes.ADD_SUPERHERO_TO_FAVLIST,
    SuperHero: SuperHero,
  };
};

export const removeSuperHeroFromMylist = (id) => {
  return {
    type: actionTypes.REMOVE_SUPERHERO_FROM_MYLIST,
    SuperHeroId: id,
  };
};

export const removeSuperHeroFromFavList = (id) => {
  return {
    type: actionTypes.REMOVE_SUPERHERO_FROM_FAVLIST,
    SuperHeroId: id,
  };
};
