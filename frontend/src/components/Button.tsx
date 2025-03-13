import colors from "@/app/utils/colors";
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

export default function Button({
  children,
  variant = "contained",
  color = "primary",
  onClick = () => {},
}: ButtonProps) {
  return (
    <>
      <MuiButton
        className="button"
        sx={{
          backgroundColor: colors[color],
        }}
        variant={variant}
        onClick={onClick}
      >
        {children}
      </MuiButton>
    </>
  );
}
