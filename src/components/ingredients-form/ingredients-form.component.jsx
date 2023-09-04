import { useFieldArray, Controller } from "react-hook-form";
import { IconButton, Box, Typography, MenuItem, Select } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { StyledTextField, StyledDivider, StyledSelect } from "../../utils/styledComponents";
import IngredientInput from "../ingredient-input/ingredient-input.component"
import { volumeUnits, weightUnits } from "../../constants/units";


const IngredientsForm = ({ control, errors, initialIngredients }) => {
  const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({
    control,
    name: "ingredients",
    shouldUnregister: true,
  });

  return (
    <>
      <Typography variant="h5" fontWeight='bold'>Ingredients</Typography>
      <StyledDivider />
      {/* Render existing ingredients */}
      {initialIngredients && initialIngredients.length > 0 && (
        ingredientFields.map((item, index) => (
          <Box key={item.id} display="flex" alignItems="center">
            <Box width="45%">
              <Controller
                name={`ingredients[${index}].name`}
                control={control}
                defaultValue={initialIngredients[index]?.name || ""}
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label="Ingredient"
                    variant="filled"
                    fullWidth
                    margin="none"
                  />
                )}
              />
            </Box>
            <Box width="25%" marginLeft={2}>
              <Controller
                name={`ingredients[${index}].quantity`}
                control={control}
                defaultValue={initialIngredients[index]?.quantity || ""}
                render={({ field }) => (
                  <StyledTextField
                    {...field}
                    label="Quantity"
                    variant="filled"
                    fullWidth
                    margin="none"
                  />
                )}
              />
            </Box>
            <Box width="25%" marginLeft={2}>
              <Controller
                name={`ingredients[${index}].unit`}
                control={control}
                defaultValue={initialIngredients[index]?.unit || ""}
                render={({ field }) => (
                  <StyledSelect {...field} fullWidth>
                    <MenuItem value={"Volume"} disabled>Volume</MenuItem>
                    {volumeUnits.map(unit => <MenuItem value={unit}>{unit}</MenuItem>)}
                    <MenuItem value={"Weight"} disabled>Weight</MenuItem>
                    {weightUnits.map(unit => <MenuItem value={unit}>{unit}</MenuItem>)}
                  </StyledSelect>
                )}
              />
            </Box>
            <IconButton onClick={() => removeIngredient(index)} color="error">
              <DeleteOutline />
            </IconButton>
          </Box>
        ))
      )}
      {/* Render IngredientInput for adding ingredients */}
      <IngredientInput control={control} errors={errors} />
    </>
  );
}

export default IngredientsForm;
