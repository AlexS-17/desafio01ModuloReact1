import React from 'react';

const Producto = (props) => {
  return (
    <>
      <div>
        <div>
          <h2>{props.nombre}</h2>
        </div>
        <div>
          <p>{props.precio}</p>
        </div>
        <img src={props.imagen} alt="" />
      </div>
    </>
  );
}

export default Producto;


