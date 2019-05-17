export const Types = {
  GET_REQUEST: 'example/GET_REQUEST',
  GET_SUCCESS: 'example/GET_SUCCESS',
  GET_FAILURE: 'example/GET_FAILURE',

  GET_REFRESH_REQUEST: 'example/GET_REFRESH_REQUEST',
  GET_REFRESH_SUCCESS: 'example/GET_REFRESH_SUCCESS',
  GET_REFRESH_FAILURE: 'example/GET_REFRESH_FAILURE',
};

const initialState = {
  data: [],
  loading: true,
  refreshing: false,
  error: null,
  page: 1,
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        loading: false,
        error: null,
        page: action.payload.data.length ? state.page + 1 : state.page,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.GET_REFRESH_REQUEST:
      return { ...state, refreshing: true };
    case Types.GET_REFRESH_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        refreshing: false,
        error: null,
        page: 2,
      };
    case Types.GET_REFRESH_FAILURE:
      return { ...state, refreshing: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  getExampleRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getExampleSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getExampleFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),

  getExampleRefreshRequest: () => ({
    type: Types.GET_REFRESH_REQUEST,
  }),

  getExampleRefreshSuccess: data => ({
    type: Types.GET_REFRESH_SUCCESS,
    payload: { data },
  }),

  getExampleRefreshFailure: error => ({
    type: Types.GET_REFRESH_FAILURE,
    payload: { error },
  }),
};
