"use client";

import React, { useEffect, useState } from "react";

import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useMapFilters from "../../hooks/useFilters";
import FilterForm from "./FilterForm";
import Text from "./Text";
import MenuIcon from "@mui/icons-material/Menu";

interface NavBarProps {
  drawerWidth: number;
}

export default function NavBar({ drawerWidth }: NavBarProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { filters } = useMapFilters();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [filters]);

  if (!isMounted) return null;

  const desktopNavBar = (
    <Box>
      <CssBaseline />
      <Drawer
        open={drawerOpen}
        variant={isMobile ? "temporary" : "permanent"}
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
          <div style={{ marginTop: isMobile ? "4rem" : "1rem" }}>
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

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const mobileNavBar = (
    <>
      <AppBar
        className="mobile_navbar light-text"
        position="relative"
        sx={{ zIndex: theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {desktopNavBar}
    </>
  );

  return <Box>{isMobile ? mobileNavBar : desktopNavBar}</Box>;
}
