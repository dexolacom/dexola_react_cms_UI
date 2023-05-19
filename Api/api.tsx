import axios from "axios";
import { ServerResponse } from "../types";

export const getDetails = async () => {
  try {
    const data = await axios.get<ServerResponse>(
      `${process.env.BASE_URL}/api/details`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
  }
};

export const getDetailsID = async (id: string) => {
  try {
    const data = await axios.get<ServerResponse>(
      `${process.env.BASE_URL}/api/details/${id}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
  }
};

export const getPlatform = async () => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/api/platforms`);

    return response?.data?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
  }
};
