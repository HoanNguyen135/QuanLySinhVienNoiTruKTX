import { api } from ".";

const SearchService = {
  searchData({ textFind, table } = {}) {
    return api.call().post("/searchData", {
      textFind,
      table,
    });
  },
};

export default SearchService;
