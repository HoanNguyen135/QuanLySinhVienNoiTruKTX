import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import InfrastructureService from "../../services/infrastructure";
import InfrastructureInRoomService from "../../services/infrastructureInRoom";
import showNotice from "../../help/ShowToast";
import { formatDateMySQL } from "../../help";

export const fetchListInfrastructure = createAsyncThunk(
  "infrastructure/fetchListInfrastructure",
  async (data, thunkAPI) => {
    const response = await InfrastructureService.getListInfrastructure();
    return response.data;
  }
);

export const fetchAddInfrastructureInRoom = createAsyncThunk(
  "infrastructure/fetchAddInfrastructureInRoom",
  async (data, thunkAPI) => {
    const {
      NameInfrastructure,
      Number,
      NumberGood,
      NumberBad,
      Note,
      Date_created,
      idPhong,
    } = data;
    const response = await InfrastructureInRoomService.addInfrastructureInRoom({
      NameInfrastructure,
      Number,
      NumberGood,
      NumberBad,
      Note,
      Date_created: formatDateMySQL(Date_created),
      idPhong,
    });
    return response.data;
  }
);

export const fetchListInfrastructureInRoom = createAsyncThunk(
  "infrastructure/fetchListInfrastructureInRoom",
  async (data, thunkAPI) => {
    const { idPhong, idKhu } = data;
    const response =
      await InfrastructureInRoomService.getListInfrastructureInRoom({
        idPhong,
        idKhu,
      });
    return response.data;
  }
);

export const fetchDeleteInfrastructure = createAsyncThunk(
  "infrastructure/fetchDeleteInfrastructure",
  async (data, thunkAPI) => {
    const { idCsvc } = data;
    const response = await InfrastructureService.deleteInfrastructure({
      idCsvc,
    });
    return response.data;
  }
);

export const fetchDeleteInfrastructureInRoom = createAsyncThunk(
  "infrastructure/fetchDeleteInfrastructureInRoom",
  async (data, thunkAPI) => {
    const { idCsvcPhong } = data;
    const response =
      await InfrastructureInRoomService.deleteInfrastructureInRoom({
        idCsvcPhong,
      });
    return response.data;
  }
);

export const fetchAddInfrastructure = createAsyncThunk(
  "infrastructure/fetchAddInfrastructure",
  async (data, thunkAPI) => {
    const { NameInfrastructure, Price, Describe, Status, Date_created } = data;
    const response = await InfrastructureService.createInfrastructure({
      NameInfrastructure,
      Price,
      Describe,
      Status,
      Date_created: formatDateMySQL(Date_created),
    });
    return response.data;
  }
);

export const fetchUpdateInfrastructure = createAsyncThunk(
  "infrastructure/fetchUpdateInfrastructure",
  async (data, thunkAPI) => {
    const {
      NameInfrastructure,
      Price,
      Describe,
      Status,
      Date_created,
      idCsvc,
    } = data.data;
    const response = await InfrastructureService.updateInfrastructure({
      NameInfrastructure,
      Price,
      Describe,
      Status,
      Date_created: formatDateMySQL(Date_created),
      idCsvc,
    });
    return response.data;
  }
);

export const fetchUpdateInfrastructureInRoom = createAsyncThunk(
  "infrastructure/fetchUpdateInfrastructureInRoom",
  async (data, thunkAPI) => {
    const { Number, NumberGood, Note, NumberBad, Date_created, idCsvcPhong } =
      data.data;

    const response =
      await InfrastructureInRoomService.updateInfrastructureInRoom({
        Number,
        NumberGood,
        Note,
        NumberBad,
        Date_created: formatDateMySQL(Date_created),
        idCsvcPhong,
      });
    return response.data;
  }
);

const infrastructureSlice = createSlice({
  name: "Infrastructure",
  initialState: {
    listInfrastructure: [],
    update: [],
    listInfrastructureInRoom: [],
    updateInRoom: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListInfrastructure.fulfilled, (state, action) => {
        return {
          ...state,
          listInfrastructure: action.payload.data,
        };
      })
      .addCase(fetchListInfrastructure.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchAddInfrastructure.fulfilled, (state, action) => {
        showNotice("Thêm cơ sở vật chất thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchAddInfrastructure.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchUpdateInfrastructure.fulfilled, (state, action) => {
        showNotice("Sửa cơ sở vật chất thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdateInfrastructure.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchDeleteInfrastructure.fulfilled, (state, action) => {
        showNotice("Xóa cơ sở vật chất thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchDeleteInfrastructure.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchListInfrastructureInRoom.fulfilled, (state, action) => {
        return {
          ...state,
          listInfrastructureInRoom: action.payload.data,
        };
      })
      .addCase(fetchListInfrastructureInRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateInfrastructureInRoom.fulfilled, (state, action) => {
        showNotice("Sửa cơ sở vật chất thành công");
        return {
          ...state,
          updateInRoom: action.payload.data,
        };
      })
      .addCase(fetchUpdateInfrastructureInRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchAddInfrastructureInRoom.fulfilled, (state, action) => {
        showNotice("Thêm cơ sở vật chất thành công");
        return {
          ...state,
          updateInRoom: action.payload.data,
        };
      })
      .addCase(fetchAddInfrastructureInRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchDeleteInfrastructureInRoom.fulfilled, (state, action) => {
        showNotice("Xóa cơ sở vật chất thành công");
        return {
          ...state,
          updateInRoom: action.payload.data,
        };
      })
      .addCase(fetchDeleteInfrastructureInRoom.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = infrastructureSlice.actions;
export default infrastructureSlice.reducer;
