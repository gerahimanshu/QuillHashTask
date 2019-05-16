import {CHANGE_PAGE, CHANGE_MENU_OPEN_STATUS} from '../actions/types';

const initialState = {
    page: 'portfolio',
    isMenuOpened: false
}

const dashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_PAGE: 
            return {
                ...state, 
                page: action.payload
            }
        case CHANGE_MENU_OPEN_STATUS:
            return {
                ...state,
                isMenuOpened: action.payload
            }    
        default:
            return state;
    }
}

export default dashboardReducer;