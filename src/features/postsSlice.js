import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    const data = await response.json();
    return data;
});

const initialState = {
    items:[],
    status: 'idle',
    error: null,
    hiddenIds:{},
    currentPage:1,
    pageSize:6,
}
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
       
        dismissPost(state,action){
            state.hiddenIds[action.payload] = true

        },
        setPage(state,action){
            state.currentPage = action.payload
        }   ,
        reset(state){
            state.hiddenIds = {}
            state.currentPage = 1
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending,(state,action)=>{
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            console.log("fetchPosts.fulfilled",action.payload)
            state.status = 'succeeded'
            state.items = action.payload
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})
export const {dismissPost,setPage,reset} = postsSlice.actions
export default postsSlice.reducer