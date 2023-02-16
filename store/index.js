import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import areaReducer from "./slices/area";
import roomReducer from "./slices/room";
import studentReducer from "./slices/student";
import applicationReducer from "./slices/applicationdorm";
import violationReducer from "./slices/violation";
import electricwaterReducer from "./slices/electricandwater";
import infrastructureReducer from "./slices/infrastructure";
import repairReducer from "./slices/repair";
import searchReducer from "./slices/search";

import profileReducer from "./slices/profile";

const store = configureStore({
  reducer: {
    User: userReducer,
    Area: areaReducer,
    Room: roomReducer,
    Student: studentReducer,
    Application: applicationReducer,
    Violation: violationReducer,
    ElectricWater: electricwaterReducer,
    Infrastructure: infrastructureReducer,
    Repair: repairReducer,
    Search: searchReducer,
    Profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
