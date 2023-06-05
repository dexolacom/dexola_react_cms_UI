import axios from "axios";

export const getPlatform = async () => {
  try {
    // const response = await axios.get(`http://localhost:1337/api/platforms`);
    const response = await axios.get(`${process.env.BASE_URL}/api/platforms`);

    return response?.data?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
  }
};

export const getPlatformId = async (id: string) => {
  try {
    const response = await axios.get(
      // `http://localhost:1337/api/platforms/${id}`
      `${process.env.BASE_URL}/api/platforms/${id}`
    );

    return response?.data?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
  }
};
