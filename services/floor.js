import { api } from ".";

const FloorService = {
  getDataFloor({ idArea } = {}) {
    return api.call().post(`/getDataFloor`, {
      idArea,
    });
  },

  addFloor({ idArea,NameFloor } = {}) {
    return api.call().post(`/addFloor`, {
      idArea,
      NameFloor
    });
  },
};

export default FloorService;
