import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface MapFilters {
  startDate: Date;
  endDate: Date;
  anio: number;
  localidad: string;
  provincia: string;
  claseArma: string;
}

interface MapFiltersState {
  filters: Partial<MapFilters>;
  setFilters: (newFilters: Partial<MapFilters>) => void;
}

const useMapFilters = create<MapFiltersState>()(
  persist(
    (set) => ({
      filters: { anio: 2017 },
      setFilters: (newFilters: Partial<MapFilters>) => {
        set(() => ({ filters: newFilters }));
      },
    }),
    {
      name: "filters",
    }
  )
);

export default useMapFilters;
