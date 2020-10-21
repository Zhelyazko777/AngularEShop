import { Action } from '@ngrx/store';

export const TOGGLE_MODAL = 'CLOSE_MODAL';

export class ToggleModalAction implements Action {
    readonly type = TOGGLE_MODAL;
    constructor(public payload: boolean) {}
}

export type Actions = ToggleModalAction;
