import { api } from ".";

const RepairService = {
  createRepair({
    NameRoom,
    ContentRepair,
    Status,
    Date_created,
    FullName,
    Describe,
  } = {}) {
    return api.call().post("/createRepair", {
      NameRoom,
      ContentRepair,
      Status,
      Date_created,
      FullName,
      Describe,
    });
  },

  createRepairOfStudent({
    FullName,
    idPhong,
    ContentRepair,
    Describe,
    Date_created,
  } = {}) {
    return api.call().post("/createRepairOfStudent", {
      FullName,
      idPhong,
      ContentRepair,
      Describe,
      Date_created,
    });
  },

  getListRepair() {
    return api.call().get(`/getListRepair`);
  },
  getListRepairOfStudent({ idPhong }) {
    return api.call().post(`/getListRepairOfStudent`, { idPhong });
  },
  updateRepair({
    Describe,
    Status,
    Date_created,
    ContentRepair,
    FullName,
    idSuaChua,
  } = {}) {
    return api.call().post("/updateRepair", {
      Describe,
      Status,
      Date_created,
      ContentRepair,
      FullName,
      idSuaChua,
    });
  },

  deleteRepair({ idSuaChua } = {}) {
    return api.call().post("/deleteRepair", {
      idSuaChua,
    });
  },

  updateArea({ Id, NameArea, Status, Date_created, Describe } = {}) {
    return api.call().put("/update-area", {
      Id,
      NameArea,
      Status,
      Date_created,
      Describe,
    });
  },
};

export default RepairService;
