import { HOST } from "@env";
let apiUrl;
(() => {
  // const test = "http://localhost:3000/api/user/read?id=65ece8ca4b6c918715c69896";
  const test = `http://${HOST}/api/`;
  apiUrl = test;
})();

export default apiUrl;
