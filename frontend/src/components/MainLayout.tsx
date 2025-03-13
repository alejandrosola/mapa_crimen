"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const drawerWidth = 300;
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {" "}
      {isClient && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: `${drawerWidth}px 1fr` },
            height: "100vh",
          }}
        >
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <NavBar drawerWidth={drawerWidth} />
          </Box>
          <Box className="principal-container">{children}</Box>
        </Box>
      )}
    </>
  );
}
