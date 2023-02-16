import { api } from ".";

const InfrastructureInRoomService = {
  addInfrastructureInRoom({
    NameInfrastructure,
    Number,
    NumberGood,
    NumberBad,
    Note = "",
    Date_created,
    idPhong,
  } = {}) {
    return api.call().post("/addInfrastructureInRoom", {
      NameInfrastructure,
      Number,
      NumberGood,
      NumberBad,
      Note,
      Date_created,
      idPhong,
    });
  },

  getListInfrastructureInRoom({ idPhong, idKhu }) {
    return api.call().post(`/getListInfrastructureInRoom`, {
      idPhong,
      idKhu,
    });
  },
  updateInfrastructureInRoom({
    Number,
    NumberGood,
    Note = "",
    NumberBad,
    Date_created,
    idCsvcPhong,
  } = {}) {
    return api.call().put("/updateInfrastructureInRoom", {
      Number,
      NumberGood,
      Note,
      NumberBad,
      Date_created,
      idCsvcPhong,
    });
  },
  deleteInfrastructureInRoom({ idCsvcPhong }) {
    return api.call().post(`/deleteInfrastructureInRoom`, {
      idCsvcPhong,
    });
  },
};

export default InfrastructureInRoomService;
