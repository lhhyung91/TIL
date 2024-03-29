import { getUsersProfileAsync, GET_USER_PROFILE } from ".";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUserProfile, GithubProfile } from "../../api/github";
import createAsyncSaga from "../../lib/createAsyncSaga";

// function* getUserProfileSaga(
//   action: ReturnType<typeof getUsersProfileAsync.request>
// ) {
//   try {
//     const userProfile: GithubProfile = yield call(
//       getUserProfile,
//       action.payload
//     );
//     yield put(getUsersProfileAsync.success(userProfile));
//   } catch (e: any) {
//     yield put(getUsersProfileAsync.failure(e));
//   }
// }

const getUserProfileSaga = createAsyncSaga(
  getUsersProfileAsync,
  getUserProfile
);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
