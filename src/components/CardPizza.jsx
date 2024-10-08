import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card className="m-4" style={{ minHeight: "550px" }}>
      <Card.Img variant="top" src={img} alt={`Imagen de Pizza de ${name}`} />
      <Card.Body>
        <Card.Title className="text-body-secondary nombrePizza">
          <h4>{name}</h4>
        </Card.Title>
        <hr />
        <Card.Text className="text-center text-body-secondary">
          <strong>
            <FontAwesomeIcon icon={faPizzaSlice} style={{ color: "#74C0FC" }} />
            {"  "} Ingredientes:
          </strong>
          {ingredients}
        </Card.Text>
        <hr />
        <Card.Text className="text-center text-body-secondary">
          <strong>Precio: </strong> ${price}
        </Card.Text>
        <div className="d-flex justify-content-around">
          <Button variant="outline-secondary btn">Ver más</Button>
          <Button variant="outline-secondary">Añadir</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
