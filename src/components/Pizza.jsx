import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pizzaApi = async () => {
      const url = "http://localhost:4000/api/pizzas/p001";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    pizzaApi();
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Card>
      <Card.Img variant="top" src={pizza?.img} alt={pizza?.name} />
      <Card.Body>
        <Card.Title>{pizza?.name?.charAt(0).toUpperCase() + pizza?.name?.slice(1)}</Card.Title>
        <Card.Text className="d-flex flex-column text-center">
          {pizza?.desc}
          <strong>Ingredientes 🍕 :</strong> {pizza?.ingredients?.join(", ")} <br />
          <strong>Precio 💰 :</strong> ${pizza?.price?.toLocaleString()}
        </Card.Text>
      </Card.Body>
      <Button>Añadir</Button>
    </Card>
  );
};

export default Pizza;
