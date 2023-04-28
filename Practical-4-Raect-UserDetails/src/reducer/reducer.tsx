import { users } from '../data';

export interface User {
    userId: number;
    image: string;
    username: string;
    email: string;
    status: boolean;
    access: string;
    clicksReviewed: number;
    MonthlyClicks: number;
    planUses: number;
}

export interface AppState {
    users: User[];
}

const initialState: AppState = {
    users: users 
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default rootReducer;
