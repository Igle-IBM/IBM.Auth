import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4001/", // Replace with your API base URL
  timeout: 5000, // Request timeout in milliseconds
});

export default instance;
