import axios from "axios";

export const findAllHomicidios = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homicidios`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
