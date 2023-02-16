import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApplicationDormServices from "../../services/applicationdorm";
import showNotice from "../../help/ShowToast";
import { formatDateMySQL } from "../../help";

export const fetchListApplication = createAsyncThunk(
  "application/fetchListApplication",
  async (data, thunkAPI) => {
    const current_page = data.current_page;
    const response = await ApplicationDormServices.getListApplication({
      current_page,
    });
    return response.data;
  }
);

export const fetchDataRegisterInDorm = createAsyncThunk(
  "application/fetchDataRegisterInDorm",
  async (data, thunkAPI) => {
    const { Id } = data;
    const response = await ApplicationDormServices.getDataRegisterInDorm({
      Id,
    });
    return response.data;
  }
);

export const fetchAcceptAllApplication = createAsyncThunk(
  "application/fetchAcceptAllApplication",
  async (data, thunkAPI) => {
    const { dataAccept, type } = data;
    const response = await ApplicationDormServices.acceptAllApplication({
      dataAccept,
      type,
    });
    return response.data;
  }
);

export const fetchRegisterInDorm = createAsyncThunk(
  "application/fetchRegisterInDorm",
  async (data, thunkAPI) => {
    const {
      Id,
      FullName,
      MSV,
      Birthday,
      Sex,
      Class,
      CCCD,
      Address,
      Entity,
      PhoneNumber,
      NumberPhone_Parent,
      Date_created,
    } = data;
    const response = await ApplicationDormServices.registerInDorm({
      Id,
      FullName,
      MSV,
      Birthday,
      Sex,
      Class,
      CCCD,
      Address,
      Entity,
      PhoneNumber,
      NumberPhone_Parent,
      Date_created: formatDateMySQL(Date_created),
    });
    return response.data;
  }
);

export const fetchNumberPage = createAsyncThunk(
  "application/fetchNumberPage",
  async (data, thunkAPI) => {
    const response = await ApplicationDormServices.getNumberPage();
    return response.data;
  }
);

export const fetchUpdateStatus = createAsyncThunk(
  "application/fetchUpdateStatus",
  async (data, thunkAPI) => {
    const { Status, idDonDK } = data.data;
    const response = await ApplicationDormServices.updateStatusApplication({
      Status,
      idDonDK,
    });
    return response.data;
  }
);

export const fetchFilterApplication = createAsyncThunk(
  "application/fetchFilterApplication",
  async (data, thunkAPI) => {
    const { arrFilter } = data;
    const response = await ApplicationDormServices.filterApplicationInDorm({
      data: arrFilter,
    });
    return response.data;
  }
);

const applicationSlice = createSlice({
  name: "Application",
  initialState: {
    listApplication: [],
    update: [],
    numberPage: [],
    dataRegisterInDorm: [],
    updateData: [],
    dataFilter: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUpdateStatus.fulfilled, (state, action) => {
        if (action.payload.message == "Duyệt đơn thành công") {
          showNotice("Đã duyệt đơn thành công");
          return {
            ...state,
            update: action.payload.data,
          };
        } else {
          showNotice("Từ chối đơn thành công", "danger");
          return {
            ...state,
            update: action.payload.data,
          };
        }
      })
      .addCase(fetchUpdateStatus.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchAcceptAllApplication.fulfilled, (state, action) => {
        if (action.payload.message == "Đã duyệt danh sách đơn thành công") {
          showNotice("Đã duyệt danh sách đơn thành công");
          return {
            ...state,
            update: action.payload.data,
          };
        } else {
          showNotice("Từ chối danh sách đơn thành công", "danger");
          return {
            ...state,
            update: action.payload.data,
          };
        }
      })
      .addCase(fetchAcceptAllApplication.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchRegisterInDorm.fulfilled, (state, action) => {
        return {
          ...state,
          updateData: action.payload.data,
        };
      })
      .addCase(fetchRegisterInDorm.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchListApplication.fulfilled, (state, action) => {
        return {
          ...state,
          listApplication: action.payload.data,
        };
      })
      .addCase(fetchListApplication.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchDataRegisterInDorm.fulfilled, (state, action) => {
        return {
          ...state,
          dataRegisterInDorm: action.payload.data,
        };
      })
      .addCase(fetchDataRegisterInDorm.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchFilterApplication.fulfilled, (state, action) => {
        if (action.payload.data.length > 0) {
          return {
            ...state,
            dataFilter: action.payload.data,
          };
        } else {
          showNotice("Không có kết quả nào trùng khớp", "danger");
          return {
            ...state,
            dataFilter: [],
          };
        }
      })
      .addCase(fetchFilterApplication.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = applicationSlice.actions;
export default applicationSlice.reducer;
