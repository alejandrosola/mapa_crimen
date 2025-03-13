"use client";

import { Alert, Box, Snackbar } from "@mui/material";
import useMapFilters from "../../hooks/useFilters";
import { useEffect, useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import Select from "./Select";

export default function FilterForm() {
  const [isMounted, setIsMounted] = useState(false);
  const { filters, setFilters } = useMapFilters();
  const [anio, setAnio] = useState<number | null>(null);
  const [claseArma, setClaseArma] = useState<string | null>(null);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setAnio(filters.anio ?? 2023);
    setClaseArma(filters.claseArma ?? "");
  }, [filters]);

  if (!isMounted) return null;

  function validFiters() {
    if (anio === null || anio < 2017 || anio > 2023) {
      return false;
    }
    return true;
  }

  function handleSubmit() {
    if (!validFiters()) {
      setSnackMessage("Invalid filters");
      setSnackOpen(true);
      return;
    }

    setFilters({
      ...filters,
      anio: anio ?? undefined,
      claseArma: claseArma ?? undefined,
    });
  }

  function clearFilters() {
    setFilters({ anio: 2023, claseArma: "" });
  }

  return (
    <>
      <Snackbar
        open={snackOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert severity={"error"} sx={{ width: "100%" }}>
          {snackMessage}
        </Alert>
      </Snackbar>
      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        {/* Texfield del año */}
        <TextField
          type="number"
          min={2017}
          max={2023}
          value={anio}
          color="success"
          label="Año"
          onChange={(e) => setAnio(Number(e))}
        />

        {/* Select de claseArma */}
        <Select
          value={claseArma}
          label="Clase de arma"
          onSelect={(e) => setClaseArma(e)}
        />

        <Button onClick={() => handleSubmit()} color="success">
          Aceptar
        </Button>
        <Button onClick={() => clearFilters()} color="success">
          Reiniciar filtros
        </Button>
      </Box>
    </>
  );
}
