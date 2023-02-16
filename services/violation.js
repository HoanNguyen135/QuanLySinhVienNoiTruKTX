import { api } from ".";

const ViolationServices = {
  getListViolationInRoom({ idKhu, idPhong } = {}) {
    return api.call().get(`getListViolationInRoom/${idKhu}/${idPhong}`, {
      params: {
        idKhu,
        idPhong,
      },
    });
  },
  updateViolation({
    ContentViolent,
    Date_created,
    Level,
    Note,
    idSV,
    idViPham,
    idKhu,
    idPhong,
  } = {}) {
    return api.call().put("/updateViolation", {
      ContentViolent,
      Date_created,
      Level,
      Note,
      idSV,
      idViPham,
      idKhu,
      idPhong,
    });
  },
  deleteViolation({ idKhu, idPhong, idViPham } = {}) {
    return api.call().put("/deleteViolation", {
      idKhu,
      idPhong,
      idViPham,
    });
  },
  addViolation({
    idKhu,
    idPhong,
    MSV,
    ContentViolent,
    Date_created,
    Level,
    Note,
  } = {}) {
    return api.call().post("/addViolation", {
      idKhu,
      idPhong,
      MSV,
      ContentViolent,
      Date_created,
      Level,
      Note,
    });
  },
  getListViolationOfStudent({ idSV } = {}) {
    return api.call().post(`getListViolationOfStudent`, {
      idSV,
    });
  },
};

export default ViolationServices;
