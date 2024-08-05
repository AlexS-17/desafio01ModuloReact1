const Header = () => {
  return (
    <div>
        <header className="cls-container-header">
            <div className="cls-capa-opaca"></div>
            <div className="cls-text-header">
              {/* Requisito 2: Crear un componente llamado Header.jsx. Este componente tiene que ser llamado al
              interior de Home.jsx y debe contener un título y una descripción */}
              <h2>¡Pizzería Mama Mia!</h2>
              <h6>¡Tenemos las mejores pizzas que puedas encontrar!</h6>
              <hr/>
            </div>
        </header>
    </div>
  )
}

export default Header;

