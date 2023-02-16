import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ViolationServices from "../../services/violation";
import showNotice from "../../help/ShowToast";

export const fetchListViolationInRoom = createAsyncThunk(
  "violation/fetchListViolationInRoom",
  async (data, thunkAPI) => {
    const { idKhu, idPhong } = data;

    const response = await ViolationServices.getListViolationInRoom({
      idKhu,
      idPhong,
    });
    return response.data;
  }
);

export const fetchListViolationOfStudent = createAsyncThunk(
  "violation/fetchListViolationOfStudent",
  async (data, thunkAPI) => {
    const { idSV } = data;
    const response = await ViolationServices.getListViolationOfStudent({
      idSV,
    });
    return response.data;
  }
);

export const fetchUpdateViolation = createAsyncThunk(
  "violation/fetchUpdateViolation",
  async (data, thunkAPI) => {
    const {
      ContentViolent,
      Date_created,
      Level,
      Note,
      idSV,
      idViPham,
      idKhu,
      idPhong,
    } = data;
    const response = await ViolationServices.updateViolation({
      ContentViolent,
      Date_created,
      Level,
      Note,
      idSV,
      idViPham,
      idKhu,
      idPhong,
    });
    return response.data;
  }
);

export const fetchDeleteViolation = createAsyncThunk(
  "violation/fetchDeleteViolation",
  async (data, thunkAPI) => {
    const { idPhong, idKhu, idViPham } = data;

    const response = await ViolationServices.deleteViolation({
      idKhu,
      idPhong,
      idViPham,
    });
    return response.data;
  }
);

export const fetchAddViolation = createAsyncThunk(
  "violation/fetchAddViolation",
  async (data, thunkAPI) => {
    const { idKhu, idPhong, MSV, ContentViolent, Date_created, Level, Note } =
      data;
    const response = await ViolationServices.addViolation({
      idKhu,
      idPhong,
      MSV,
      ContentViolent,
      Date_created,
      Level,
      Note,
    });
    return response.data;
  }
);

const violationSlice = createSlice({
  name: "Violation",
  initialState: {
    listViolation: [],
    update: [],
    listViolationOfStudent: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchListViolationInRoom.fulfilled, (state, action) => {
        return {
          ...state,
          listViolation: action.payload.data,
        };
      })
      .addCase(fetchListViolationInRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchListViolationOfStudent.fulfilled, (state, action) => {
        return {
          ...state,
          listViolationOfStudent: action.payload.data,
        };
      })
      .addCase(fetchListViolationOfStudent.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchUpdateViolation.fulfilled, (state, action) => {
        showNotice("Cập nhật vi phạm thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdateViolation.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchDeleteViolation.fulfilled, (state, action) => {
        showNotice("Xóa vi phạm thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchDeleteViolation.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchAddViolation.fulfilled, (state, action) => {
        showNotice("Thêm vi phạm thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchAddViolation.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = violationSlice.actions;
export default violationSlice.reducer;
