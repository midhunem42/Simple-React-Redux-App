import { SET_NAME, SET_AGE } from '../constants/actionTypes'


const initialStateUser = {
    name: 'midhun',
    age: 25
};

const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case SET_NAME:
            state = {
                ...state,
                name: action.payload
            }
            break;
        case SET_AGE:
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
    return state;
}

export default userReducer;