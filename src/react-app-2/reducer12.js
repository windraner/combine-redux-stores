const initialState = {
  value12: 0
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
    case 'update2':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
    }
}
