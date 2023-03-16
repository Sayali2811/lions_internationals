import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// const API = axios.create({ baseURL: process.env.REACT_APP_API });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("profile")}`;
  }
  return req;
});
export const signIn = (formData) => API.post("auth/login", formData);
export const addActivity = (formData) =>
  API.post("activity/addactivity", formData);
export const getActivity = () => API.get("activity/type");
export const getSubtype = (type) => API.get(`activity/subtype?type=${type}`);
export const getCategory = (subtype) =>
  API.get(`activity/category?subtype=${subtype}`);
export const getPlaceHolder = (Category) =>
  API.get(`activity/placeholder?category=${Category}`);
export const getReportedActivity=()=>API.get("activity/reportedactivity");
