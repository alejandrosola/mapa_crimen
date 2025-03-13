"use client";

import React, { useEffect, useState } from "react";

import { Box, CssBaseline, Drawer, List } from "@mui/material";
import useMapFilters from "../../hooks/useFilters";
import FilterForm from "./FilterForm";
import Text from "./Text";

interface NavBarProps {
  drawerWidth: number;
}

export default function NavBar({ drawerWidth }: NavBarProps) {
  const [isMounted, setIsMounted] = useState(false);

  const { filters } = useMapFilters();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const desktopNavBar = (
    <Box>
      <CssBaseline />
      <Drawer
        open={true}
        variant="permanent"
        sx={{
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="main_navbar light-text"
        >
          <div style={{ marginTop: "1rem" }}>
            <Text color="lightText" variant="h2">
              {filters.anio}
            </Text>
          </div>
          <List>
            <FilterForm />
          </List>
        </Box>
      </Drawer>
    </Box>
  );

  return <Box>{desktopNavBar}</Box>;
}
