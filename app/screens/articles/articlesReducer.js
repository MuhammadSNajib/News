const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false
}

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ARTICLES_PENDING':
      return { ...state, isLoading: true, isSuccess: false, isError: false }
    case 'ARTICLES_FULFILLED':
      return { ...state, isLoading: false, data: action.data }
    case 'ARTICLES_REJECTED':
      return { ...state, isLoading: false, isError: true }
    default:
      return state
  }
}