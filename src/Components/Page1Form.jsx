import React from "react";
import { TextField, Box } from "@mui/material";

const Page1Form = ({ formData, setFormData }) => {
  return (
    <Box>
      <TextField
        fullWidth
        label="Recipe Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        margin="normal"
      />
      <TextField
        fullWidth
        label="Prep Time"
        value={formData.prepTime}
        onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Cook Time"
        value={formData.cookTime}
        onChange={(e) => setFormData({ ...formData, cookTime: e.target.value })}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Servings"
        type="number"
        value={formData.servings}
        onChange={(e) =>
          setFormData({ ...formData, servings: e.target.value })
        }
        margin="normal"
      />
    </Box>
  );
};

export default Page1Form;
