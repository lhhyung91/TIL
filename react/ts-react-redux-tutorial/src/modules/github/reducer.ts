import { createReducer } from "typesafe-actions";
import { getUsersProfileAsync } from "./actions";
import {
  asyncState,
  createAsyncReducer,
  transformToArray,
} from "../../lib/reducerUtils";
import { GithubAction, GithubState } from "./types";

const initialState: GithubState = {
  userProfile: asyncState.initial(),
};

const github = createReducer<GithubState, GithubAction>(
  initialState
).handleAction(
  transformToArray(getUsersProfileAsync),
  createAsyncReducer(getUsersProfileAsync, "userProfile")
);

export default github;
