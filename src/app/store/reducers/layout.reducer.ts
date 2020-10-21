import * as LayoutAction from '../actions/layout.actions';

export interface State {
    isModalOpened: boolean;
}

const initialState: State = {
    isModalOpened: false,
};

export function layoutReducer(state = initialState, action: LayoutAction.Actions): any {
    switch (action.type) {
        case LayoutAction.TOGGLE_MODAL: {
            return { ...state, isModalOpened: action.payload };
        }
        default: {
            return state;
        }
    }
}
