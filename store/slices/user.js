import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user";
import showNotice from "../../help/ShowToast";
import { formatDateMySQL } from "../../help";

export const fetchCreateAccount = createAsyncThunk(
  "user/fetchCreateAccount",
  async (data, thunkAPI) => {
    const { Username, Email, Password, Date } = data.data;
    const response = await UserService.createAccount({
      userName: Username,
      email: Email,
      password: Password,
      date_created: Date,
    });
    return response.data;
  }
);

export const fetchAddUser = createAsyncThunk(
  "user/fetchAddUser",
  async (data, thunkAPI) => {
    const { Username, Position, Email, Date_created, Password, Note } =
      data.data;
    const response = await UserService.addAccount({
      userName: Username,
      email: Email,
      password: Password,
      date_created: Date_created,
      note: Note,
      position: Position,
    });
    return response.data;
  }
);

export const fetchUserLogin = createAsyncThunk(
  "user/fetchUserLogin",
  async (data, thunkAPI) => {
    const { Username, Password } = data;
    const response = await UserService.login({
      userName: Username,
      passWord: Password,
    });
    return response.data;
  }
);

export const fetchListUser = createAsyncThunk(
  "user/fetchListUser",
  async (data, thunkAPI) => {
    const current_page = data.current_page;
    const response = await UserService.getListUser({ current_page });
    return response.data;
  }
);

export const fetchListUserPermission = createAsyncThunk(
  "user/fetchListUserPermission",
  async (data, thunkAPI) => {
    const response = await UserService.getListUserPermission();
    return response.data;
  }
);

export const fetchCancerUser = createAsyncThunk(
  "user/fetchCancerUser",
  async (data, thunkAPI) => {
    const { Id } = data;
    const response = await UserService.cancerUser({ Id });
    return response.data;
  }
);

export const fetchUpdateUser = createAsyncThunk(
  "user/fetchUpdateUser",
  async (data, thunkAPI) => {
    const { Username, Position, Email, Date_created, Password, Note, Id } =
      data.data;
    const response = await UserService.updateUser({
      Username,
      Position,
      Email,
      Date_created,
      Password,
      Note,
      Id,
    });
    return response.data;
  }
);

export const fetchUpdateUserManage = createAsyncThunk(
  "user/fetchUpdateUserManage",
  async (data, thunkAPI) => {
    const { NameArea, Id } = data;
    const response = await UserService.updateUserManage({
      NameArea,
      Id,
    });
    return response.data;
  }
);

export const fetchAddUserManage = createAsyncThunk(
  "user/fetchAddUserManage",
  async (data, thunkAPI) => {
    const { NameArea, Username } = data;
    const response = await UserService.addUserManage({
      NameArea,
      Username,
    });
    return response.data;
  }
);

const userSlice = createSlice({
  name: "User",
  initialState: {
    user: {},
    listUser: [],
    update: [],
    dataStudent: [],
    listUserPermission: [],
  },
  reducers: {
    logout: (state, action) => {
      return {
        ...state,
        user: {},
        dataStudent: [],
      };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchCreateAccount.fulfilled, (state, action) => {
        if (action.payload.message == "Tạo tài khoản thành công") {
          showNotice("Đăng ký tài khoản thành công");
        } else if (action.payload.message == "Đã tồn tại tài khoản") {
          showNotice("Đã tồn tại tài khoản", true);
        }
      })
      .addCase(fetchCreateAccount.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        if (action.payload.message === "Đăng nhập thành công") {
          showNotice(action.payload.message);
          return {
            ...state,
            user: action.payload.data,
            dataStudent: action.payload.dataStudent,
          };
        } else if (
          action.payload.message === "Tài khoản hoặc mật khẩu không chính xác"
        ) {
          showNotice(action.payload.message, true);
        } else {
          showNotice(action.payload.message, true);
        }
      })
      .addCase(fetchUserLogin.rejected, (state, action) => {
        console.log(action);
      })

      .addCase(fetchListUser.fulfilled, (state, action) => {
        return {
          ...state,
          listUser: action.payload.data,
        };
      })
      .addCase(fetchListUser.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchListUserPermission.fulfilled, (state, action) => {
        return {
          ...state,
          listUserPermission: action.payload.data,
        };
      })
      .addCase(fetchListUserPermission.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchCancerUser.fulfilled, (state, action) => {
        showNotice("Đã hủy tài khoản thành công");
        state.update = action.payload.data;
      })
      .addCase(fetchCancerUser.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateUser.fulfilled, (state, action) => {
        showNotice("Cập nhật tài khoản thành công");
        state.update = action.payload.data;
      })
      .addCase(fetchUpdateUser.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchAddUserManage.fulfilled, (state, action) => {
        showNotice("Phân công quản lý nhà thành công");
        state.update = action.payload.data;
      })
      .addCase(fetchAddUserManage.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateUserManage.fulfilled, (state, action) => {
        if (action.payload.message) {
          showNotice("Hủy phân công quản lý khu vực thành công");
          state.update = action.payload.data;
        } else {
          showNotice("Cập nhật thành công");
          state.update = action.payload.data;
        }
      })
      .addCase(fetchUpdateUserManage.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchAddUser.fulfilled, (state, action) => {
        showNotice("Thêm tài khoản thành công");
        state.update = action.payload.data;
      })
      .addCase(fetchAddUser.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const { checkUpdate, logout } = userSlice.actions;
export default userSlice.reducer;
