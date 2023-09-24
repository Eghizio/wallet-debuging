import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/users", credentials);
      toast.success("Registration is successful!");
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(toast.error("Email is already in use"));
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get("/api/users/logout");
      token.unset();
      toast.success("You are logged out");
    } catch (error) {
      return rejectWithValue(
        toast.error("Something went wrong. Please, try again")
      );
    }
  }
);
