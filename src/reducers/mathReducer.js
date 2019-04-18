import { ADD, SUBTRACT } from '../constants/actionTypes'

const initialState = {
    result: 1,
    lastvalues: []
};
const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            state = {
                ...state,
                result: state.result + action.payload,
                lastvalues: [...state.lastvalues, action.payload]
            }
            break;
        case SUBTRACT:
            state = {
                ...state,
                result: state.result - action.payload,
                lastvalues: [...state.lastvalues, action.payload]
            }
            break;


    }
    return state;
}

export default mathReducer;