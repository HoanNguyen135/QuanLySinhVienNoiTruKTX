import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RoomService from "../../services/room";
import showNotice from "../../help/ShowToast";

export const fetchCreateRoom = createAsyncThunk(
  "room/fetchCreateRoom",
  async (data, thunkAPI) => {
    const {
      Describe,
      NameRoom,
      Status,
      Date_created,
      idKhu,
      NumberLimit,
      Floor,
    } = data.data;
    const response = await RoomService.createRoom({
      Describe,
      NameRoom,
      Status,
      Date_created,
      idKhu,
      NumberLimit,
      Floor,
    });
    return response.data;
  }
);

export const fetchListRoom = createAsyncThunk(
  "room/fetchListRoom",
  async (data, thunkAPI) => {
    const { floor, idArea,checkViolation } = data.data;
    const response = await RoomService.getListRoom({ idArea, floor,checkViolation });
    return response.data;
  }
);

export const fetchListRoomRepair = createAsyncThunk(
  "room/fetchListRoomRepair",
  async (data, thunkAPI) => {
    const { idArea } = data;
    const response = await RoomService.getListRoomRepair({ idArea });
    return response.data;
  }
);

export const fetchUpdateRoom = createAsyncThunk(
  "room/fetchUpdateRoom",
  async (data, thunkAPI) => {
    const {
      Describe,
      NameRoom,
      Status,
      Date_created,
      NumberLimit,
      Floor,
      idPhong,
      idKhu,
    } = data.data;

    const response = await RoomService.updateRoom({
      Describe,
      NameRoom,
      Status,
      Date_created,
      NumberLimit,
      Floor,
      idPhong,
      idKhu,
    });
    return response.data;
  }
);

export const fetchDeleteRoom = createAsyncThunk(
  "room/fetchDeleteRoom",
  async (data, thunkAPI) => {
    const { idPhong, idKhu, Floor } = data.dataRoom;

    const response = await RoomService.deleteRoom({
      idPhong,
      idKhu,
      Floor,
    });
    return response.data;
  }
);

const roomSlice = createSlice({
  name: "Room",
  initialState: {
    listRoom: [],
    update: [],
    create: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchListRoom.fulfilled, (state, action) => {
        return {
          ...state,
          listRoom: action.payload.data,
        };
      })
      .addCase(fetchListRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchCreateRoom.fulfilled, (state, action) => {
        showNotice("Tạo phòng thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchCreateRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateRoom.fulfilled, (state, action) => {
        showNotice("Sửa thông tin phòng thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdateRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchDeleteRoom.fulfilled, (state, action) => {
        showNotice("Xóa phòng thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchDeleteRoom.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = roomSlice.actions;
export default roomSlice.reducer;
