import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ElectricAndWaterServices from "../../services/electricwater";
import showNotice from "../../help/ShowToast";
import { formatDateMySQL } from "../../help";

export const fetchListElectricAndWater = createAsyncThunk(
  "electricwater/fetchListElectricAndWater",
  async (data, thunkAPI) => {
    const { current_page, idKhu } = data;
    const response = await ElectricAndWaterServices.getListElectricAndWater({
      current_page,
      idKhu,
    });
    return response.data;
  }
);

export const fetchPrice = createAsyncThunk(
  "electricwater/fetchPrice",
  async (data, thunkAPI) => {
    const response = await ElectricAndWaterServices.getPrice();
    return response.data;
  }
);

export const fetchUpdatePrice = createAsyncThunk(
  "electricwater/fetchUpdatePrice",
  async (data, thunkAPI) => {
    const { PriceElectric, PriceWater, Date_created, Date_update } = data;
    const response = await ElectricAndWaterServices.updatePrice({
      PriceElectric,
      PriceWater,
      Date_created: formatDateMySQL(Date_created),
      Date_update: formatDateMySQL(Date_update),
    });
    return response.data;
  }
);

export const fetchNumberPage = createAsyncThunk(
  "electricwater/fetchNumberPage",
  async (data, thunkAPI) => {
    const { idKhu } = data;
    const response = await ElectricAndWaterServices.getNumberPage({ idKhu });
    return response.data;
  }
);

export const fetchUpdateElectricAndWater = createAsyncThunk(
  "electricwater/fetchUpdateElectricAndWater",
  async (data, thunkAPI) => {
    const {
      Date_created,
      OldNumberElectric,
      NewNumberElectric,
      OldNumberWater,
      NewNumberWater,
      Status,
      idDienNuoc,
      idKhu,
    } = data;
    const response = await ElectricAndWaterServices.updateElectricAndWater({
      Date_created,
      OldNumberElectric,
      NewNumberElectric,
      OldNumberWater,
      NewNumberWater,
      Status,
      idDienNuoc,
      idKhu,
    });
    return response.data;
  }
);

export const fetchDeleteElectricAndWater = createAsyncThunk(
  "electricwater/fetchDeleteElectricAndWater",
  async (data, thunkAPI) => {
    const { idDienNuoc, idKhu } = data;
    const response = await ElectricAndWaterServices.deleteElectricAndWater({
      idDienNuoc,
      idKhu,
    });
    return response.data;
  }
);

export const fetchAddElecAndWater = createAsyncThunk(
  "electricwater/fetchAddElecAndWater",
  async (data, thunkAPI) => {
    const {
      Date_created,
      Rooms,
      NewNumberElectric,
      NewNumberWater,
      Status,
      idKhu,
    } = data;
    const response = await ElectricAndWaterServices.addElectricAndWater({
      Date_created,
      Rooms,
      NewNumberElectric,
      NewNumberWater,
      Status,
      idKhu,
    });
    return response.data;
  }
);

const electricwaterSlice = createSlice({
  name: "ElectricWater",
  initialState: {
    listElecWater: [],
    update: [],
    numberPage: [],
    price: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      //   .addCase(fetchUpdateStatus.fulfilled, (state, action) => {
      //     if (action.payload.message == "Duy???t ????n th??nh c??ng") {
      //       showNotice("???? duy???t ????n th??nh c??ng");
      //       return {
      //         ...state,
      //         update: action.payload.data,
      //       };
      //     } else {
      //       showNotice("T??? ch???i ????n th??nh c??ng", "danger");
      //       return {
      //         ...state,
      //         update: action.payload.data,
      //       };
      //     }
      //   })
      //   .addCase(fetchUpdateStatus.rejected, (state, action) => {
      //     console.log(action.error.message);
      //   })

      .addCase(fetchUpdatePrice.fulfilled, (state, action) => {
        showNotice("C???p nh???t gi?? ??i???n n?????c th??nh c??ng");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdatePrice.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchPrice.fulfilled, (state, action) => {
        return {
          ...state,
          price: action.payload.data,
        };
      })
      .addCase(fetchPrice.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchListElectricAndWater.fulfilled, (state, action) => {
        return {
          ...state,
          listElecWater: action.payload.data,
        };
      })
      .addCase(fetchListElectricAndWater.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchAddElecAndWater.fulfilled, (state, action) => {
        if (action.payload.message == "Nh???p t??n ph??ng ko h???p l???") {
          showNotice("Nh???p t??n ph??ng kh??ng h???p l???", true);
        } else {
          showNotice("Th??m ti???n ??i???n n?????c th??nh c??ng");
          return {
            ...state,
            update: action.payload.data,
          };
        }
      })
      .addCase(fetchAddElecAndWater.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchDeleteElectricAndWater.fulfilled, (state, action) => {
        showNotice("X??a ti???n ??i???n n?????c th??nh c??ng");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchDeleteElectricAndWater.rejected, (state, action) => {
        console.log(action.error.message);
      })

      .addCase(fetchUpdateElectricAndWater.fulfilled, (state, action) => {
        showNotice("C???p nh???t ti???n ??i???n n?????c th??nh c??ng");
        return {
          ...state,
          update: action.payload.data,
        };
      })
      .addCase(fetchUpdateElectricAndWater.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {} = electricwaterSlice.actions;
export default electricwaterSlice.reducer;
