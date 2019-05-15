import {CHANGE_PAGE} from '../actions/types';

const initialState = {
    page: 'portfolio'
}

const dashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_PAGE: 
            return {
                ...state, 
                page: action.payload
            }
        default:
            return state;
    }
}

export default dashboardReducer;