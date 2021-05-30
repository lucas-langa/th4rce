import { createSlice,  createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import client from "../apollo/client";
import { gql } from '@apollo/client';

const peopleAdapter = createEntityAdapter({
    selectId: (people) => people.name,
});

const initialState = peopleAdapter.getInitialState({
    status: 'idle'
});

const fetchPeople =  createAsyncThunk('people/fetchPeople', async (page = 1) => {
        const response = await client.query({
            query: gql`
            query getPeople {
                allPeople(page: ${page}){
                    name
                    height
                    mass
                    gender
                    homeworld
                }
            }`
        })   
        return response.data.allPeople;
});        


const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPeople.pending]: (state,action)=>{
            state.status = 'loading' 
        },
        [fetchPeople.fulfilled]:(state, action) =>{
            state.status = 'idle' 
            peopleAdapter.setAll(state, action.payload)  
        } 
    }
});


export const {
    selectAll: getAllPeople,
    selectById: getPeopleById
} = peopleAdapter.getSelectors((state) => state.people)


export default peopleSlice.reducer
export { fetchPeople}