import React from "react";
import { TextField, Box, IconButton } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

const Page3Form = ({ formData, setFormData }) => {
  const handleStepChange = (index, value) => {
    const newSteps = [...formData.steps];
    newSteps[index] = value;
    setFormData({ ...formData, steps: newSteps });
  };

  const addStep = () => {
    setFormData({ ...formData, steps: [...formData.steps, ""] });
  };

  const removeStep = (index) => {
    const newSteps = formData.steps.filter((_, i) => i !== index);
    setFormData({ ...formData, steps: newSteps });
  };

  return (
    <Box>
      <TextField
        fullWidth
        label="Image URL"
        value={formData.image || ""}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        margin="normal"
      />
      {formData.steps.map((step, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <TextField
            fullWidth
            label={`Step ${index + 1}`}
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
          />
          <IconButton onClick={() => removeStep(index)} color="error">
            <Delete />
          </IconButton>
        </Box>
      ))}
      <IconButton onClick={addStep} color="primary">
        <Add /> Add Step
      </IconButton>
    </Box>
  );
};

export default Page3Form;
