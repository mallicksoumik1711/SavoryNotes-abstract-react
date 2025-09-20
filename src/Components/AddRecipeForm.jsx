import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import Page1Form from "./Page1Form";
import Page2Form from "./Page2Form";
import Page3Form from "./Page3Form";
import { addRecipe, fetchRecipes } from "../Redux/recipesSlice";

const steps = ["Recipe Details", "Ingredients", "Instructions"];

// ✅ helper to generate consistent string IDs
const generateId = () => Date.now().toString();

const AddRecipeForm = ({ onClose, editingRecipe }) => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prepTime: "",
    cookTime: "",
    servings: 1,
    ingredients: [""],
    steps: [""],
  });

  useEffect(() => {
    if (editingRecipe) {
      setFormData({
        title: editingRecipe.title || "",
        description: editingRecipe.description || "",
        prepTime: editingRecipe.prepTime || "",
        cookTime: editingRecipe.cookTime || "",
        servings: editingRecipe.servings || 1,
        ingredients: editingRecipe.ingredients || [""],
        steps: editingRecipe.steps || [""],
      });
    }
  }, [editingRecipe]);

  const validateStep = () => {
    if (activeStep === 0) {
      return (
        formData.title.trim() &&
        formData.description.trim() &&
        formData.prepTime.trim() &&
        formData.cookTime.trim() &&
        formData.servings > 0
      );
    }
    if (activeStep === 1) {
      return formData.ingredients.every((ing) => ing.trim() !== "");
    }
    if (activeStep === 2) {
      return formData.steps.every((step) => step.trim() !== "");
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) setActiveStep((prev) => prev + 1);
    else alert("Please fill all fields in this step.");
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async () => {
    if (!validateStep()) {
      alert("Please fill all fields before submitting!");
      return;
    }

    try {
      if (editingRecipe) {
        // You can implement update here later
      } else {
        await dispatch(
          addRecipe({
            
            title: formData.title,
            description: formData.description,
            prepTime: formData.prepTime,
            cookTime: formData.cookTime,
            servings: formData.servings,
            ingredients: formData.ingredients,
            steps: formData.steps,
            author: "Admin",
            image: formData.image || "",
          })
        ).unwrap();
      }

      await dispatch(fetchRecipes()); // refresh recipes

      alert("Recipe added successfully!");

      setFormData({
        title: "",
        description: "",
        prepTime: "",
        cookTime: "",
        servings: 1,
        ingredients: [""],
        steps: [""],
      });
      setActiveStep(0);

      if (onClose) onClose();
    } catch (error) {
      console.error(error);
      alert("Error adding recipe. Check console.");
    }
  };

  return (
    <Box
      sx={{
        width: "600px",
        margin: "30px auto",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep > index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ marginTop: "20px" }}>
        {activeStep === 0 && <Page1Form formData={formData} setFormData={setFormData} />}
        {activeStep === 1 && <Page2Form formData={formData} setFormData={setFormData} />}
        {activeStep === 2 && <Page3Form formData={formData} setFormData={setFormData} />}
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <Button disabled={activeStep === 0} onClick={handleBack} sx={{ marginRight: "10px" }}>
          Back
        </Button>
        {activeStep < steps.length - 1 ? (
          <Button variant="contained" onClick={handleNext} disabled={!validateStep()}>
            Next
          </Button>
        ) : (
          <Button variant="contained" color="success" onClick={handleSubmit} disabled={!validateStep()}>
            Submit
          </Button>
        )}
        <Button variant="outlined" color="error" onClick={onClose} sx={{ marginLeft: "10px" }}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AddRecipeForm;
