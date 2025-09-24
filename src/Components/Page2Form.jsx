import React from "react";
import { TextField, Box, IconButton } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

const Page2Form = ({ formData, setFormData }) => {
  const handleIngredientChange = (index, value) => {
    const trimmedValue = value.trim();
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });

     // Prevent duplicates except for empty input
    if (
      trimmedValue === "" ||
      !formData.ingredients
        .filter((_, i) => i !== index) // exclude current index
        .map((ing) => ing.trim().toLowerCase())
        .includes(trimmedValue.toLowerCase())
    ) {
      newIngredients[index] = value;
      setFormData({ ...formData, ingredients: newIngredients });
    } else {
      alert("Ingredient must be unique!");
    }
  };

 
  

  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ""] });
  };

  const removeIngredient = (index) => {
    const newIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  return (
    <Box>
      {formData.ingredients.map((ingredient, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <TextField
            fullWidth
            label={`Ingredient ${index + 1}`}
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
          />
          <IconButton onClick={() => removeIngredient(index)} color="error">
            <Delete />
          </IconButton>
        </Box>
      ))}
      <IconButton onClick={addIngredient} color="primary">
        <Add /> Add Ingredient
      </IconButton>
    </Box>
  );
};

export default Page2Form;

