import { createSlice,  createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import client from "../apollo/client";
import { gql } from '@apollo/client';

const personAdapter = createEntityAdapter({
    selectId: (person) => person.name,
});

const initialState = personAdapter.getInitialState({

});

const fetchPerson = createAsyncThunk('people/fetchPerson', async (name) => {
    const response = await client.query({
        query: gql`
            query getPerson {
                person(name: "${name}"){
                    name
                    height
                    mass
                    gender
                    homeworld
                }
            }`
    })
   return response.data
});

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPerson.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPerson.fulfilled]: (state, action) => {
            state.status='idle';
            personAdapter.setAll(state, action.payload);
        }
    }
});

export const {
    selectAll: getPerson,
    selectById: getThemById
} = personAdapter.getSelectors((state) => state.person)

export default personSlice.reducer
export { fetchPerson }