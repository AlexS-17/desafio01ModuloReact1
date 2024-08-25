import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const pizzasApi = async () => {
      const url = "http://localhost:4000/api/pizzas";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    pizzasApi();
  }, []);

  return (
    <div className="home">
      <Header />
      <Container className="d-flex">
        <Row className="g-4">
          {pizzas.map((pizza) => (
            <Col sm={12} md={6} lg={4} key={pizza.id}>
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

