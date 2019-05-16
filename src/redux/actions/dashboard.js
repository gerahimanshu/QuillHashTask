import {CHANGE_PAGE, CHANGE_MENU_OPEN_STATUS} from './types' 

export const changePage = page => {
    return {
        type: CHANGE_PAGE,
        payload: page
    }
}

export const changeMenuOpenStatus = isMenuOpened => {
    return {
        type: CHANGE_MENU_OPEN_STATUS,
        payload: isMenuOpened
    }
}