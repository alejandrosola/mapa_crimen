import axios from "axios";

export const findAllHomicidios = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/homicidios`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
