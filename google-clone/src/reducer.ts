import {act} from "react-dom/test-utils";

interface stateProps {
    term: null
}
export const initialState: stateProps = {
    term: null
}

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEACH_TERM"
};


const reducer = (state: stateProps, action: any): stateProps => {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term
            };
        default:
            return state;
    }
};

export default reducer;
