import { Dispatch } from 'redux';
import { getUserProfile } from '../../api/github';
import { getUsersProfileAsync } from './actions';

export function getUserProfileThunk(username: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getUsersProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e: any) {
      // e의 타입을 뭐로 해야 될 지 모르겠음
      dispatch(failure(e));
    }
  };
}
