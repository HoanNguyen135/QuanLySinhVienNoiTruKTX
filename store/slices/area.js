import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AreaService from "../../services/area";
import showNotice from "../../help/ShowToast";
import FloorService from "../../services/floor";

export const fetchCreateArea = createAsyncThunk(
  "area/fetchCreateArea",
  async (data, thunkAPI) => {
    const { NameArea, Describe, Status, Date_created } = data.data;
    const response = await AreaService.createArea({
      NameArea,
      Describe,
      Status,
      Date_created,
    });
    return response.data;
  }
);

export const fetchAddFloor = createAsyncThunk(
  "area/fetchAddFloor",
  async (data, thunkAPI) => {
    const { idArea, NameFloor } = data;
    const response = await FloorService.addFloor({
      idArea,
      NameFloor,
    });
    return response.data;
  }
);

export const fetchListArea = createAsyncThunk(
  "area/fetchListArea",
  async (data, thunkAPI) => {
    const response = await AreaService.getListArea();
    return response.data;
  }
);

export const fetchUpdateArea = createAsyncThunk(
  "area/fetchUpdateArea",
  async (data, thunkAPI) => {
    const { Id, NameArea, Status, Date_created, Describe } = data.data;

    const response = await AreaService.updateArea({
      Id,
      NameArea,
      Status,
      Date_created,
      Describe,
    });
    return response.data;
  }
);

export const fetchDeleteArea = createAsyncThunk(
  "area/fetchDeleteArea",
  async (data, thunkAPI) => {
    const { idKhu } = data;

    const response = await AreaService.deleteArea({
      idKhu,
    });
    return response.data;
  }
);

const areaSlice = createSlice({
  name: "Area",
  initialState: {
    user: {},
    listArea: [],
    update: [],
    create: [],
    updateFloor: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAddFloor.fulfilled, (state, action) => {
        showNotice("Tạo tầng thành công");
        return {
          ...state,
          updateFloor: action.payload.data,
        };
      })
      .addCase(fetchAddFloor.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchCreateArea.fulfilled, (state, action) => {
        showNotice("Tạo khu thành công");
        return {
          ...state,
          create: action.payload.data,
        };
      })
      .addCase(fetchCreateArea.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchListArea.fulfilled, (state, action) => {
        return {
          ...state,
          listArea: action.payload.data,
        };
      })
      .addCase(fetchListArea.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateArea.fulfilled, (state, action) => {
        state.update = action.payload.data;
      })
      .addCase(fetchUpdateArea.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchDeleteArea.fulfilled, (state, action) => {
        showNotice("Xóa khu vực thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchDeleteArea.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const { checkUpdate } = areaSlice.actions;
export default areaSlice.reducer;
