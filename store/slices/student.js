import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StudentService from "../../services/student";
import showNotice from "../../help/ShowToast";

export const fetchListStudentInRoom = createAsyncThunk(
  "student/fetchListStudentInRoom",
  async (data, thunkAPI) => {
    const { idArea, idRoom } = data;
    const response = await StudentService.getListStudentInRoom({
      idArea,
      idRoom,
    });
    return response.data;
  }
);

export const fetchUpdateInfoStudent = createAsyncThunk(
  "student/fetchUpdateInfoStudent",
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
      idSV,
    } = data;

    const response = await StudentService.updateStudent({
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
      idSV,
    });
    return response.data;
  }
);

export const fetchUpdateAvatar = createAsyncThunk(
  "student/fetchUpdateAvatar",
  async (data, thunkAPI) => {
    const { Avatar, idSV } = data;

    const response = await StudentService.updateAvatar({
      Avatar,
      idSV,
    });
    return response.data;
  }
);

export const fetchRemoveStudentInRoom = createAsyncThunk(
  "student/fetchRemoveStudentInRoom",
  async (data, thunkAPI) => {
    const { idSV } = data;

    const response = await StudentService.removeStudentInRoom({
      idSV,
    });
    return response.data;
  }
);

export const fetchAddStudentInRoom = createAsyncThunk(
  "student/fetchAddStudentInRoom",
  async (data, thunkAPI) => {
    const { MSV,idRoom,idArea } = data;

    const response = await StudentService.addStudentInRoom({
      MSV,idRoom,idArea
    });
    return response.data;
  }
);


export const fetchAddStudentInRoomToFile = createAsyncThunk(
  "student/fetchAddStudentInRoomToFile",
  async (data, thunkAPI) => {
    const response = await StudentService.addStudentInRoomToFile({
      data: data.data
    });
    return response.data;
  }
);


const studentSlice = createSlice({
  name: "Student",
  initialState: {
    listStudentInRoom: [],
    update: [],
    updateAddAStudent:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder

      .addCase(fetchListStudentInRoom.fulfilled, (state, action) => {
        return {
          ...state,
          listStudentInRoom: action.payload.data,
        };
      })
      .addCase(fetchListStudentInRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateInfoStudent.fulfilled, (state, action) => {
        showNotice("Cập nhật thông tin thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdateInfoStudent.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateAvatar.fulfilled, (state, action) => {
        showNotice("Cập nhật ảnh đại diện thành công");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdateAvatar.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchRemoveStudentInRoom.fulfilled, (state, action) => {
        showNotice("Xóa sinh viên khỏi phòng thành công");
        return {
          ...state,
          update: action.payload.data,
          updateAddAStudent: action.payload.data,
        };
      })
      .addCase(fetchRemoveStudentInRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchAddStudentInRoom.fulfilled, (state, action) => {
        if(action.payload.data.length >0){
          showNotice("Thêm sinh viên thành công vào phòng");
        return {
          ...state,
          update: action.payload.data,
          updateAddAStudent: action.payload.data,
        }
        }else{
          showNotice("Không tồn tại dữ liệu hồ sơ sinh viên",'danger')
        }
      })
      .addCase(fetchAddStudentInRoom.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchAddStudentInRoomToFile.fulfilled, (state, action) => {
        showNotice("Thêm thành công danh sách sinh viên");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchAddStudentInRoomToFile.rejected, (state, action) => {
        console.log(action.error.message);
      })
  },
});

export const {} = studentSlice.actions;
export default studentSlice.reducer;
