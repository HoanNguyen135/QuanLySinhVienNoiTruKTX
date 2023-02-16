import { api } from ".";

const ProfileService = {
  getDataProfile({ id_TK } = {}) {
    return api.call().post("/getDataProfile", {
      id_TK,
    });
  },
  updateProfile({
    FullName,
    MSV,
    Birthday,
    Sex,
    Ethnic,
    CCCD,
    Country,
    Major,
    Email,
    Class,
    Address,
    Name_Father,
    PhoneNumber_Father,
    Name_Mother,
    PhoneNumber_Mother,
    Email_Parent,
    PhoneNumber,
    id_TK,
    Date_created,
  } = {}) {
    return api.call().post("/updateProfile", {
      FullName,
      MSV,
      Birthday,
      Sex,
      Ethnic,
      CCCD,
      Country,
      Major,
      Email,
      Class,
      Address,
      Name_Father,
      PhoneNumber_Father,
      Name_Mother,
      PhoneNumber_Mother,
      Email_Parent,
      PhoneNumber,
      id_TK,
      Date_created,
    });
  },
  updateAvatar({ Avatar, idHSSV } = {}) {
    return api.call().put("/updateAvatarProfile", {
      Avatar,
      idHSSV,
    });
  },

  getListProfileStudent() {
    return api.call().get("/getListProfileStudent");
  },
};

export default ProfileService;
