import axios from "./axios";

export const contact = (input) => axios.put("/auth/contact", input);
