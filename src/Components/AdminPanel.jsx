import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, deleteRecipe } from "../Redux/recipesSlice";
import { Button, Table } from "react-bootstrap";
import AddRecipeForm from "./AddRecipeForm";
import { Dialog, DialogContent } from "@mui/material";

function AdminPanel() {
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector((state) => state.recipes);

  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleOpenModal = (recipe = null) => {
    setEditingRecipe(recipe);
    setShowForm(true);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-warning mb-4">Admin Panel</h2>

      <div className="d-flex justify-content-end mb-3">
        <Button variant="warning" onClick={() => handleOpenModal()}>
          Add Recipe
        </Button>
      </div>

      <Dialog
        open={showForm}
        onClose={() => setShowForm(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent>
          <AddRecipeForm
            onClose={() => setShowForm(false)}
            editingRecipe={editingRecipe}
          />
        </DialogContent>
      </Dialog>

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
            {recipes.map((recipe) => (
              <tr key={String(recipe.id)}>
                <td>{recipe.id}</td>
                <td>{recipe.title}</td>
                <td>{recipe.description}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    className="me-2"
                    onClick={() => handleOpenModal(recipe)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={async () => {
                      await dispatch(deleteRecipe(String(recipe.id))); // ✅ ensure string
                      dispatch(fetchRecipes());
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default AdminPanel;
