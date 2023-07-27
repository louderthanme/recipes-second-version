import { useFieldArray, Controller } from "react-hook-form";
import { IconButton, Box } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { StyledTextField } from "../../utils/styledComponents";
import IngredientInput from "../ingredient-input/ingredient-input.component"

const IngredientsForm = ({ control, initialIngredients }) => {
  const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({
    control,
    name: "ingredients",
    shouldUnregister: true,
  });

  return (
    <>
      <h2>INGREDIENTS</h2>
      {/* Render IngredientInput for adding ingredients */}
      <IngredientInput control={control} />
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
                    margin="normal"
                  />
                )}
              />
            </Box>
            <Box width="45%" marginLeft={2}>
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
                    margin="normal"
                  />
                )}
              />
            </Box>
            <IconButton onClick={() => removeIngredient(index)} color="error">
              <DeleteOutline />
            </IconButton>
          </Box>
        ))
      )}
    </>
  );
}

export default IngredientsForm;
