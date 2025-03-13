import colors from "@/app/utils/colors";
import { TextField as MuiTextField } from "@mui/material";

interface TextFieldProps {
  label: string;
  type?: "number" | "text";
  min?: number;
  max?: number;
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  value?: number | string | null;
  onChange: (e: string) => void;
}

export default function TextField({
  label,
  type = "text",
  value,
  onChange,
  min,
  max,
  color = "primary",
}: TextFieldProps) {
  const inputProps: { min?: number; max?: number } = {};

  if (min) inputProps.min = min;
  if (max) inputProps.max = max;

  return (
    <>
      <MuiTextField
        fullWidth
        className="textfield"
        label={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{ inputProps: inputProps }}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: colors[color] }, // Borde normal
            "&:hover fieldset": { borderColor: colors[color] }, // Borde al pasar el mouse
            "&.Mui-focused fieldset": { borderColor: colors[color] }, // Borde al enfocar
          },
          "& .MuiInputLabel-root": { color: colors[color] }, // Color del label
          "& .MuiInputLabel-root.Mui-focused": { color: colors[color] }, // Color del label al enfocar
          "& .MuiInputBase-input": { color: colors[color] }, // Color del texto
        }}
      />
    </>
  );
}
