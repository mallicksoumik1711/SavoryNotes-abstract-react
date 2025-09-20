import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Favorites() {
  const { user } = useSelector(state => state.auth)
  const recipes = useSelector(state => state.recipes) // array of all recipes

  if (!user)
    return <p className="text-center mt-5">Please login to view favorites.</p>

  const favoriteRecipes = recipes.recipes.filter(r =>
    user.favourites.includes(r.id)
  )

  return (
    <Container className="my-5">
      <h2 className="text-warning text-center mb-4">My Favorites</h2>
      <Row>
        {favoriteRecipes.length === 0 ? (
          <p className="text-center text-light">
            You have no favorite recipes yet.
          </p>
        ) : (
          favoriteRecipes.map(recipe => (
            <Col
              key={recipe.id}
              xs={12}
              sm={6}
              md={4}
              className="mb-4 d-flex align-items-stretch"
            >
              <Card className="bg-dark text-light w-100">
                <div
                  style={{
                    height: '200px',
                    overflow: 'hidden',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={recipe.image}
                    alt={recipe.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <Card.Body
                  style={{
                    height: '180px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Card.Title className="text-warning">{recipe.title}</Card.Title>
                  <Card.Text>{recipe.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  )
}

export default Favorites
