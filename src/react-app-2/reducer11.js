const initialState = {
  value11: 0
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
    case 'update1':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
    }
}
