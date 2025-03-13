import colors from "@/app/utils/colors";
import { Typography } from "@mui/material";

interface TextProps {
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "lightText";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1";
  justify?: boolean;
}

export default function Text({
  justify = false,
  children,
  color = "primary",
  variant = "h1",
}: TextProps) {
  return (
    <>
      <Typography
        fontFamily={"Ubuntu Mono"}
        className={justify ? "justify-text" : ""}
        variant={variant}
        color={colors[color]}
        gutterBottom
      >
        {children}
      </Typography>
    </>
  );
}
