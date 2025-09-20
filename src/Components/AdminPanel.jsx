// src/pages/AdminPanel.jsx
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, addRecipe, updateRecipe, deleteRecipe } from "../Redux/recipesSlice";
import { Modal, Button, Form, Table, Row, Col, ProgressBar } from "react-bootstrap";

function AdminPanel() {
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector(state => state.recipes);

  const emptyRecipe = {
    title: "",
    description: "",
    ingredients: [""],
    steps: [""],
    prepTime: "",
    cookTime: "",
    servings: 1,
    author: "",
    image: ""
  };

  const DEFAULT_IMAGE = "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg";

  const [showModal, setShowModal] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [formData, setFormData] = useState(emptyRecipe);
  const [step, setStep] = useState(1);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleOpenModal = (recipe = null) => {
    setEditingRecipe(recipe);
    setFormData(recipe ? recipe : emptyRecipe);
    setStep(1);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeWithImage = { ...formData, image: formData.image || DEFAULT_IMAGE };

    if (editingRecipe) {
      dispatch(updateRecipe({ id: editingRecipe.id, recipe: recipeWithImage }));
    } else {
      dispatch(addRecipe(recipeWithImage));
    }
    setShowModal(false);
  };

  const handleArrayChange = (index, value, type) => {
    const updated = [...formData[type]];
    updated[index] = value;
    setFormData({ ...formData, [type]: updated });
  };

  const addArrayField = (type) => {
    setFormData({ ...formData, [type]: [...formData[type], ""] });
  };

  const removeArrayField = (index, type) => {
    const updated = formData[type].filter((_, i) => i !== index);
    setFormData({ ...formData, [type]: updated });
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="container my-5">
      <h2 className="text-center text-warning mb-4">Admin Panel</h2>

      <div className="d-flex justify-content-end mb-3">
        <Button variant="warning" onClick={() => handleOpenModal()}>Add Recipe</Button>
      </div>

      {loading ? (
        <p className="text-light">Loading...</p>
      ) : (
        <Table striped bordered hover responsive className="table-dark text-light">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map(recipe => (
              <tr key={recipe.id}>
                <td>{recipe.id}</td>
                <td>{recipe.title}</td>
                <td>{recipe.description}</td>
                <td>
                  <Button variant="info" size="sm" className="me-2" onClick={() => handleOpenModal(recipe)}>Edit</Button>
                  <Button variant="danger" size="sm" onClick={() => dispatch(deleteRecipe(recipe.id))}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{editingRecipe ? "Edit Recipe" : "Add Recipe"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Stepper Progress Bar */}
          <ProgressBar now={(step / 3) * 100} className="mb-4" label={`Step ${step} / 3`} />

          <Form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <>
                <Row className="mb-3">
                  <Col>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      required
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={DEFAULT_IMAGE}
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                </Form.Group>
              </>
            )}

            {/* Step 2: Time & Servings */}
            {step === 2 && (
              <Row className="mb-3">
                <Col>
                  <Form.Label>Prep Time</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.prepTime}
                    onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
                  />
                </Col>
                <Col>
                  <Form.Label>Cook Time</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.cookTime}
                    onChange={(e) => setFormData({ ...formData, cookTime: e.target.value })}
                  />
                </Col>
                <Col>
                  <Form.Label>Servings</Form.Label>
                  <Form.Control
                    type="number"
                    value={formData.servings}
                    onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                    min={1}
                  />
                </Col>
              </Row>
            )}

            {/* Step 3: Ingredients & Steps */}
            {step === 3 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Ingredients</Form.Label>
                  {formData.ingredients.map((ing, idx) => (
                    <div key={idx} className="d-flex mb-1">
                      <Form.Control
                        value={ing}
                        onChange={(e) => handleArrayChange(idx, e.target.value, "ingredients")}
                      />
                      <Button variant="danger" size="sm" className="ms-2" onClick={() => removeArrayField(idx, "ingredients")}>Remove</Button>
                    </div>
                  ))}
                  <Button variant="secondary" size="sm" onClick={() => addArrayField("ingredients")}>Add Ingredient</Button>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Steps</Form.Label>
                  {formData.steps.map((stepItem, idx) => (
                    <div key={idx} className="d-flex mb-1">
                      <Form.Control
                        value={stepItem}
                        onChange={(e) => handleArrayChange(idx, e.target.value, "steps")}
                      />
                      <Button variant="danger" size="sm" className="ms-2" onClick={() => removeArrayField(idx, "steps")}>Remove</Button>
                    </div>
                  ))}
                  <Button variant="secondary" size="sm" onClick={() => addArrayField("steps")}>Add Step</Button>
                </Form.Group>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-3">
              {step > 1 && <Button variant="secondary" onClick={prevStep}>Back</Button>}
              {step < 3 && <Button variant="primary" onClick={nextStep}>Next</Button>}
              {step === 3 && <Button type="submit" variant="warning">{editingRecipe ? "Update" : "Add"}</Button>}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdminPanel;
