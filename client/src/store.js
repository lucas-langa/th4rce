import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './features/people/peopleSlice';
import personReducer from './features/people/personSlice';

const store = configureStore({
    reducer: {
        people: peopleReducer,
        person: personReducer
    }
});

export default store