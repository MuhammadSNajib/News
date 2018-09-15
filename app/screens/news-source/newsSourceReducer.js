const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false
}

export default function newsSourceReducer(state = initialState, action) {
  switch (action.type) {
    case 'NEWS_SOURCE_PENDING':
      return { ...state, isLoading: true, isSuccess: false, isError: false }
    case 'NEWS_SOURCE_FULFILLED':
      return { ...state, isLoading: false, data: action.data }
    case 'NEWS_SOURCE_REJECTED':
      return { ...state, isLoading: false, isError: true }
    default:
      return state
  }
}