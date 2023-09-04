import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Button, IconButton, Box, MenuItem, Select } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { StyledTextField, StyledSelect } from "../../utils/styledComponents";
import { volumeUnits, weightUnits } from "../../constants/units";


const IngredientInput = ({ control, errors }) => {
  const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({
    control,
    name: "ingredients"
  });

  return (
    <>
      {ingredientFields.map((item, index) => (
        <Box key={item.id} display="flex" alignItems="center">
          <Box width="45%">
            <StyledTextField
              {...control.register(`ingredients[${index}].name`, { required: "This field is required" })}
              defaultValue={item.name}
              label='Ingredient'
              variant="filled"
              fullWidth
              margin="normal"
              error={!!errors?.ingredients?.[index]?.name}
              helperText={errors?.ingredients?.[index]?.name?.message || ""}
             
            />
          </Box>
          <Box width="25%" marginLeft={2}>
            <StyledTextField
              {...control.register(`ingredients[${index}].quantity`, { required: "This field is required" })}
              defaultValue={item.quantity}
              label="Quantity"
              variant="filled"
              fullWidth
              margin="normal"
              error={!!errors?.ingredients?.[index]?.quantity}
              helperText={errors?.ingredients?.[index]?.quantity?.message || ""} 
            />
          </Box>
          <Box width="25%" marginLeft={2}>
            <Controller
              name={`ingredients[${index}].unit`}
              control={control}
              defaultValue={item.unit || ""}
              render={({ field }) => (
                <StyledSelect {...field} displayEmpty fullWidth>
                  <MenuItem value="" disabled>
                    Unit
                  </MenuItem>
                  <MenuItem value={"Volume"} disabled>Volume</MenuItem>
                  {volumeUnits.map((unit, unitIndex) => <MenuItem key={unitIndex} value={unit}>{unit}</MenuItem>)}
                  <MenuItem value={"Weight"} disabled>Weight</MenuItem>
                  {weightUnits.map((unit, unitIndex) => <MenuItem key={unitIndex} value={unit}>{unit}</MenuItem>)}
                </StyledSelect>
              )}
            />
          </Box>
          <IconButton onClick={() => removeIngredient(index)} color="error">
            <DeleteOutline />
          </IconButton>
        </Box>
      ))}
      <Button onClick={() => appendIngredient({ name: "", quantity: "", unit: "" })}>Add Ingredient</Button>
    </>
  );
}

export default IngredientInput;