import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SearchService from "../../services/search";
import showNotice from "../../help/ShowToast";
import { formatDateMySQL } from "../../help";

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (data, thunkAPI) => {
    const { textFind, table } = data;
    const response = await SearchService.searchData({ textFind, table });
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "Search",
  initialState: {
    listSearch: [],
  },
  reducers: {
    removeData: (state, action) => {
      state.listSearch = [];
    },
    updataData:(state,action)=>{
      state.listSearch = state.listSearch.map((item)=> {
        if(item.idViPham == action.payload.idViPham){
          return{
            ...item,
            NoiDungViPham : action.payload.ContentViolent,
            NgayViPham: action.payload.Date_created,
            MucDo: action.payload.Level,
            GhiChu: action.payload.Note
          }
        }else{
          return{
            ...item
          }
        }
      })
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.listSearch = action.payload.data;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {removeData,updataData} = searchSlice.actions;
export default searchSlice.reducer;
