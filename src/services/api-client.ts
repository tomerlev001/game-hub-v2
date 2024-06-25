import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9d1dc0fbbcb043768d2c3e51620c2df2",
  },
});
