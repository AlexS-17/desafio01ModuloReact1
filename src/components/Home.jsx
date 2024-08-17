import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPizza from "./CardPizza";
import Header from "./Header";
import { data } from "./pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState(data);

  return (
    <div className="home">
      <Header />
      <Container className="d-flex">
        <Row className="g-4">
          {pizzas.map((pizza) => (
            <Col sm={12} md={6} lg={4} key={pizza.id}> {/* Usar un id único en lugar de name */}
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={
                  <ul>
                    {pizza.ingredients.map((ingrediente) => (
                      <li key={ingrediente}>{ingrediente}</li>
                    ))}
                  </ul>
                }
                img={pizza.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
