import axios from "axios";
import { IAttributes, IAttributesItem } from "../types";

// /api/platforms
// /api/details/:id

const BASE_URL = "http://localhost:1337";

export const getDetails = async ({ id }: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/details/${id}`);

    const regex = /!\[.*\]\((.*)\)/;
    const data = [{ ...response.data.data }].map((el) => {
      const match = el.attributes.image.match(regex);
      const imageUrl = match ? match[1] : el.attributes.image;
      return {
        id: el.id,
        image: imageUrl,
      };
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
  }
};

export const getAllPlatform = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/platforms`);

    const data = response?.data?.data
      ?.map((el: IAttributes) => {
        return {
          technology: el.attributes.data.technology,
          description: el.attributes.data.description,
          paltfornName: el.attributes.data.paltfornName,
          id: el.id,
        };
      })
      .sort(
        (a: IAttributesItem, b: IAttributesItem) =>
          b.technology.length - a.technology.length
      );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
  }
};
