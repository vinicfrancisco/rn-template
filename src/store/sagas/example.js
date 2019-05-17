import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  Creators as ExampleActions,
  Types as ExampleTypes
} from "~store/ducks/example";
import api from "~services/api";

export function* getExampleRequest() {
  try {
    const page = yield select(state => state.example.page);
    const response = yield call(api.get, `?page=${page}&results=20`);
    yield put(ExampleActions.getExampleSuccess(response.data.results));
  } catch (error) {
    yield put(ExampleActions.getExampleFailure("Erro"));
  }
}

export function* getExampleRefreshRequest() {
  try {
    const response = yield call(api.get, "?page=1&results=20");
    yield put(ExampleActions.getExampleRefreshSuccess(response.data.results));
  } catch (error) {
    yield put(ExampleActions.getExampleRefreshFailure("Erro"));
  }
}

export default function* exampleSaga() {
  yield takeLatest(ExampleTypes.GET_REQUEST, getExampleRequest);
  yield takeLatest(ExampleTypes.GET_REFRESH_REQUEST, getExampleRefreshRequest);
}
