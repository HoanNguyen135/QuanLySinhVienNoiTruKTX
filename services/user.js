import { api } from ".";

const UserService = {
  createAccount({
    userName,
    position = "Sinh viên",
    email,
    status = "Hoạt động",
    date_created,
    password,
    note = "",
  } = {}) {
    return api.call().post("/create-new-user", {
      userName,
      position,
      email,
      status,
      date_created,
      password,
      note,
    });
  },

  addAccount({
    userName,
    position,
    email,
    status = "Hoạt động",
    date_created,
    password,
    note,
  } = {}) {
    return api.call().post("/addUser", {
      userName,
      position,
      email,
      status,
      date_created,
      password,
      note,
    });
  },

  login({ userName, passWord } = {}) {
    return api.call().get(`/login/${userName}/${passWord}`, {
      params: {
        userName,
        passWord,
      },
    });
  },

  cancerUser({ Id } = {}) {
    return api.call().post(`cancerUser`, {
      Id,
    });
  },

  getListUser({ current_page } = {}) {
    return api.call().get(`/getListUser/${current_page}`, {
      params: {
        current_page,
      },
    });
  },
  getListUserPermission() {
    return api.call().get(`/getListUserPermission`);
  },
  updateUser({
    Username,
    Position,
    Email,
    Date_created,
    Password,
    Note,
    Id,
  } = {}) {
    return api.call().put("/update-user", {
      Username,
      Position,
      Email,
      Date_created,
      Password,
      Note,
      Id,
    });
  },
  updateUserManage({ NameArea, Id } = {}) {
    return api.call().post("/updateUserManage", {
      NameArea,
      Id,
    });
  },
  addUserManage({ NameArea, Username } = {}) {
    return api.call().post("/addUserManage", {
      NameArea,
      Username,
    });
  },
  getNumberPage() {
    return api.call().get("/getNumberPageUser");
  },
  getListUserMange() {
    return api.call().get("/getListUserMange");
  },
};

export default UserService;
