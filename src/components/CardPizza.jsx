import { Button, Card, ListGroup } from 'react-bootstrap';
import FormatoMiles from './FormatoMiles';

const CardPizza = (props) => {
  return (
    <Card className='cls-tamannio-cards'>
      <Card.Img variant="top" src={props.imagen} alt={props.nombre}/>
      <Card.Body className="p-0">
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <Card.Title className='text-start'>Pizza {props.nombre}</Card.Title>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>
                    <p>Ingredientes:</p>
                    <p className='cls-tamannio-ingredientes'>🍕 {props.ingredientes.join(', ')}</p>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>
                    <strong>Precio: $<FormatoMiles numero = {props.precio} /></strong>
                    <div className="d-flex justify-content-between pt-3 pb-3">
                        <Button variant="outline-dark" size="sm">Ver Más 👀</Button>
                        <Button variant="dark" size="sm">Añadir 🛒</Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;