import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProfileService from "../../services/profileStudent";
import showNotice from "../../help/ShowToast";
import { formatDateMySQL } from "../../help";

export const fetchAddProfile = createAsyncThunk(
  "profile/fetchAddProfile",
  async (data, thunkAPI) => {
    const { id_TK } = data;
    const response = await ProfileService.getDataProfile({
      id_TK,
    });
    return response.data;
  }
);

export const fetchUpdateProfile = createAsyncThunk(
  "profile/fetchUpdateProfile",
  async (data, thunkAPI) => {
    const {
      FullName,
      MSV,
      Birthday,
      Sex,
      Ethnic,
      CCCD,
      Country,
      Major,
      Email,
      Class,
      Address,
      Name_Father,
      PhoneNumber_Father,
      Name_Mother,
      PhoneNumber_Mother,
      Email_Parent,
      PhoneNumber,
      id_TK,
      Date_created,
    } = data;
    const response = await ProfileService.updateProfile({
      FullName,
      MSV,
      Birthday,
      Sex,
      Ethnic,
      CCCD,
      Country,
      Major,
      Email,
      Class,
      Address,
      Name_Father,
      PhoneNumber_Father,
      Name_Mother,
      PhoneNumber_Mother,
      Email_Parent,
      PhoneNumber,
      id_TK,
      Date_created: formatDateMySQL(Date_created),
    });
    return response.data;
  }
);

export const fetchUpdateAvatar = createAsyncThunk(
  "profile/fetchUpdateAvatar",
  async (data, thunkAPI) => {
    const { Avatar, idHSSV } = data;

    const response = await ProfileService.updateAvatar({
      Avatar,
      idHSSV,
    });
    return response.data;
  }
);

const profileSlice = createSlice({
  name: "Profile",
  initialState: {
    dataProfile: [],
    update: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAddProfile.fulfilled, (state, action) => {
        return {
          ...state,
          dataProfile: action.payload.data,
        };
      })
      .addCase(fetchAddProfile.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchUpdateProfile.fulfilled, (state, action) => {
        showNotice("Cập nhật hồ sơ thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdateProfile.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchUpdateAvatar.fulfilled, (state, action) => {
        showNotice("Cập nhật avatar thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdateAvatar.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = profileSlice.actions;
export default profileSlice.reducer;
