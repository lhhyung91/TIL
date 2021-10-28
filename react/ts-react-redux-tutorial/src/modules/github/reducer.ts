import { createReducer } from 'typesafe-actions';
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
} from './actions';
import { GiehubAction, GiehubState } from './types';

const initialState: GiehubState = {
  userProfile: {
    loading: false,
    data: null,
    error: null,
  },
};

const github = createReducer<GiehubState, GiehubAction>(initialState, {
  [GET_USER_PROFILE]: (state, action) => ({
    ...state,
    userProfile: {
      loading: true,
      data: null,
      error: null,
    },
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      data: action.payload,
      error: null,
    },
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      data: null,
      error: action.payload,
    },
  }),
});

export default github;
