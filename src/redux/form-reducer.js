const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";


let initialState = {
	login: '',
	password: '',
	isRememberMe: false,
	isFetching: true,
	firstName: '',
	lastName: '',
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		// TOGGLE_IS_FETCHING
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching};
		}

		default:
			return state;
	}
}

export const toggleIsFetchingAction = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;
