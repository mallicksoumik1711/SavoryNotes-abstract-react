// src/pages/UserPanel.jsx
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../Redux/recipesSlice";
import { Card, Button, Modal, Row, Col } from "react-bootstrap";
import { updateFavorites } from "../Redux/authSlice";

function UserPanel() {
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector((state) => state.recipes);
  const { user } = useSelector((state) => state.auth); // currently logged-in user

  const [favorites, setFavorites] = useState(user?.favorites || []);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleFavorite = async (recipeId) => {
    let updatedFavorites = [];
    if (favorites.includes(recipeId)) {
      updatedFavorites = favorites.filter((id) => id !== recipeId);
    } else {
      updatedFavorites = [...favorites, recipeId];
    }

    // setFavorites(updatedFavorites);
    // dispatch(updateFavorites(updatedFavorites));

    // Update user in json-server
    try {
      await fetch(`http://localhost:3001/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorites: updatedFavorites }),
      });
      setFavorites(updatedFavorites);
      dispatch(updateFavorites(updatedFavorites));
    } catch (err) {
      console.error("Failed to update favorites:", err);
    }
  };

  const handleView = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-warning mb-4">All Recipes</h2>

      {loading ? (
        <p className="text-light text-center" style={{height: "80vh"}}>Loading...</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {recipes.map((recipe) => (
            <Col key={recipe.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={recipe.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text className="text-truncate">{recipe.description}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <Button
                      variant={favorites.includes(recipe.id) ? "danger" : "outline-danger"}
                      onClick={() => handleFavorite(recipe.id)}
                    >
                      ♥
                    </Button>
                    <Button variant="warning" onClick={() => handleView(recipe)}>
                      View
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Recipe Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="text-light"
      >
        {selectedRecipe && (
          <>
            <Modal.Header closeButton className="border-0">
              <Modal.Title>{selectedRecipe.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="img-fluid rounded mb-3"
              />
              <p>{selectedRecipe.description}</p>
              <hr className="border-light" />
              <Row>
                <Col md={6}>
                  <h5>Ingredients</h5>
                  <ul>
                    {selectedRecipe.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Steps</h5>
                  <ol>
                    {selectedRecipe.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </Col>
              </Row>
              <hr className="border-light" />
              <Row>
                <Col md={4}>
                  <strong>Prep Time:</strong> {selectedRecipe.prepTime}
                </Col>
                <Col md={4}>
                  <strong>Cook Time:</strong> {selectedRecipe.cookTime}
                </Col>
                <Col md={4}>
                  <strong>Servings:</strong> {selectedRecipe.servings}
                </Col>
              </Row>
              <p className="mt-3"><strong>Author:</strong> {selectedRecipe.author}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
}

export default UserPanel;
