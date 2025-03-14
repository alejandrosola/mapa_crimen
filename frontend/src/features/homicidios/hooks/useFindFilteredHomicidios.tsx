import axios from "axios";
import { MapFilters } from "../../../../hooks/useFilters";

export const findFilteredHomicidios = async (filters: Partial<MapFilters>) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/homicidios/filter`,
      {
        params: filters,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
