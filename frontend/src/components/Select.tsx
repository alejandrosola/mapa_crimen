import colors from "@/app/utils/colors";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";

interface SelectProps {
  label: string;
  value: string | null;
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  onSelect: (e: string) => void;
}

export default function Select({
  onSelect,
  value,
  label,
  color = "success",
}: SelectProps) {
  const options = [
    "Arma blanca",
    "Arrollamiento por rodado o tren",
    "Sin determinación",
    "Ahorcamiento / asfixia",
    "Precipitación al vacío",
    "Quemaduras",
    "Objeto contundente",
    "Otra arma o mecanismo",
    "Arma de fuego",
    "Envenenamiento",
    "Golpes",
  ];

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <MuiSelect
          value={value}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          sx={{
            color: colors[color],
            "& .css-81qg8w": { color: "red" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: colors[color],
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: colors[color],
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors[color],
            },
            "&.MuiInputLabel-shrink": {
              color: "red",
            },
            "& .MuiSelect-select": { color: colors[color] },
            "& .MuiSelect-icon": { color: colors[color] },
          }}
          onChange={(e) => e.target.value !== null && onSelect(e.target.value)}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </>
  );
}
