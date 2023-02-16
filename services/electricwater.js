import { api } from ".";

const ElectricAndWaterServices = {
  getNumberPage({ idKhu } = {}) {
    return api.call().post("/getNumberPageElecAndWater", {
      idKhu,
    });
  },
  getListElectricAndWater({ current_page = 1, idKhu } = {}) {
    return api.call().post(`/getListElectricAndWater`, {
      current_page,
      idKhu,
    });
  },
  addElectricAndWater({
    Date_created,
    Rooms,
    NewNumberElectric,
    NewNumberWater,
    Status,
    idKhu,
  } = {}) {
    return api.call().post("/addElectricAndWater", {
      Date_created,
      Rooms,
      NewNumberElectric,
      NewNumberWater,
      Status,
      idKhu,
    });
  },
  deleteElectricAndWater({ idDienNuoc, idKhu } = {}) {
    return api.call().post(`/deleteElectricAndWater`, {
      idDienNuoc,
      idKhu,
    });
  },

  updateElectricAndWater({
    Date_created,
    OldNumberElectric,
    NewNumberElectric,
    OldNumberWater,
    NewNumberWater,
    Status,
    idDienNuoc,
    idKhu,
  } = {}) {
    return api.call().post(`/updateElectricAndWater`, {
      Date_created,
      OldNumberElectric,
      NewNumberElectric,
      OldNumberWater,
      NewNumberWater,
      Status,
      idDienNuoc,
      idKhu,
    });
  },

  getPrice() {
    return api.call().post(`/getPrice`);
  },

  updatePrice({ PriceElectric, PriceWater, Date_created, Date_update } = {}) {
    return api.call().post(`/updatePrice`, {
      PriceElectric,
      PriceWater,
      Date_created,
      Date_update,
    });
  },
};

export default ElectricAndWaterServices;
