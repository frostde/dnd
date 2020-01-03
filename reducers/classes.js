import * as TYPES from '../actions/TYPES'

const initialState = {
    list: []
}

export const classes = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_CLASSES:
            return {...state, list: [...action.payload]};
        default:
            return state
    }
};