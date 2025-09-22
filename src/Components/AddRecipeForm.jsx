import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import Page1Form from "./Page1Form";
import Page2Form from "./Page2Form";
import Page3Form from "./Page3Form";
import { addRecipe, fetchRecipes, updateRecipe } from "../Redux/recipesSlice";

const steps = ["Recipe Details", "Ingredients", "Instructions"];

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
        await dispatch(
          updateRecipe({
            id: Number(editingRecipe.id),   
            recipe: {
              title: formData.title,
              description: formData.description,
              prepTime: formData.prepTime,
              cookTime: formData.cookTime,
              servings: formData.servings,
              ingredients: formData.ingredients,
              steps: formData.steps,
              author: editingRecipe.author || "Admin",
              image: formData.image || "",
            },
          })
        ).unwrap();
        alert(`Recipe ID ${editingRecipe.id} updated successfully!`);
      } else {
        const response = await fetch("http://localhost:3002/recipes");
      const recipes = await response.json();

      let maxId = 0;
      recipes.forEach(r => {
        const idNum = Number(r.id);
        if (!isNaN(idNum) && idNum > maxId) maxId = idNum;
      });

      const nextId = maxId + 1;
        await dispatch(
          addRecipe({
            id: String (nextId),
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
        alert(`Recipe added successfully with ID: ${nextId}`);
      }

      await dispatch(fetchRecipes()); 

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
      alert("Error submitting recipe. Check console. " + error.message);
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
