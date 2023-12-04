import axios from "./axios";
export const register = (input) =>
  axios.post("/auth/register", input).catch(handleError);
export const login = (input) =>
  axios.post("/auth/login", input).catch(handleError);
export const fetchMe = () => axios.get("/auth/me").catch(handleError);

// Define a function to handle errors
const handleError = (error) => {
  console.error("HTTP request failed:", error);
  throw error; // Rethrow the error to propagate it further
};

// export const register = (input) => axios.post("/auth/register", input);
// export const login = (input) => axios.post("/auth/login", input);
// export const fetchMe = () => axios.get("/auth/me");
