import axios from "axios";

export const $api = axios.create({
  baseURL: "https://test.tspb.su/test-task",
});
