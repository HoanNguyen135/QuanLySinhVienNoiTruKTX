import { api } from ".";

const InfrastructureService = {
  getListInfrastructure() {
    return api.call().get(`/getListInfrastructure`);
  },
  createInfrastructure({
    NameInfrastructure,
    Price,
    Describe = "",
    Status,
    Date_created,
  } = {}) {
    return api.call().post("/createInfrastructure", {
      NameInfrastructure,
      Price,
      Describe,
      Status,
      Date_created,
    });
  },
  updateInfrastructure({
    NameInfrastructure,
    Price,
    Describe = "",
    Status,
    Date_created,
    idCsvc,
  } = {}) {
    return api.call().put("/updateInfrastructure", {
      NameInfrastructure,
      Price,
      Describe,
      Status,
      Date_created,
      idCsvc,
    });
  },
  deleteInfrastructure({ idCsvc }) {
    return api.call().post(`/deleteInfrastructure`, {
      idCsvc,
    });
  },
};

export default InfrastructureService;
