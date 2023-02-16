import { api } from ".";

const AreaService = {
  createArea({ NameArea, Describe, Status, Date_created } = {}) {
    return api.call().post("/create-new-area", {
      NameArea,
      Describe,
      Status,
      Date_created,
    });
  },

  getListArea() {
    return api.call().get(`/getListArea`);
  },

  deleteArea({ idKhu }) {
    return api.call().post(`/deleteArea`, {
      idKhu,
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

export default AreaService;
