import { api } from ".";

const ApplicationDormServices = {
  getNumberPage() {
    return api.call().get("/getNumberPage");
  },
  getListApplication({ current_page } = {}) {
    return api.call().get(`/getListApplication/${current_page}`, {
      params: {
        current_page,
      },
    });
  },
  updateStatusApplication({ Status, idDonDK } = {}) {
    return api.call().post("/updateStatusApplication", {
      Status,
      idDonDK,
    });
  },
  getDataRegisterInDorm({ Id } = {}) {
    return api.call().post("/getDataRegisterInDorm", {
      Id,
    });
  },
  registerInDorm({
    Id,
    FullName,
    MSV,
    Birthday,
    Sex,
    Class,
    CCCD,
    Address,
    Entity,
    PhoneNumber,
    NumberPhone_Parent,
    Date_created,
  } = {}) {
    return api.call().post("/registerInDorm", {
      Id,
      FullName,
      MSV,
      Birthday,
      Sex,
      Class,
      CCCD,
      Address,
      Entity,
      PhoneNumber,
      NumberPhone_Parent,
      Date_created,
    });
  },

  filterApplicationInDorm({ data } = {}) {
    return api.call().post("/filterApplicationInDorm", {
      data,
    });
  },

  acceptAllApplication({ dataAccept, type } = {}) {
    return api.call().post("/acceptAllApplication", {
      dataAccept,
      type,
    });
  },
  getManageNumber() {
    return api.call().get("/getManageNumber");
  },
};

export default ApplicationDormServices;
