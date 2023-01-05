import "./PublicShoppingCart.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export const PublicShoppingCart = ({ showShopping, handleShowShopping }) => {
  const [shoppingItems, setShoppingItems] = useState([
    {
      imagen: "",
      nombre: "Zapatillas Adidas",
      cantidad: 1,
    },
    {
      imagen: "",
      nombre: "Zapatillas Pumba",
      cantidad: 2,
    },
  ]);

  return (
    <div
      className={`Shopping-Cart ${
        showShopping === false && "Shooping-Cart-hidden"
      }`}
    >
      <div className="Shopping-Cart-content">
        <MdClose className="Shopping-Cart-close" onClick={handleShowShopping} />
        <h3>Shopping Cart</h3>
        {shoppingItems &&
          shoppingItems.map((item) => (
            <div className="Shipping-Cart-item">
              <div>{/* <img src={item.imagen} alt="Imagen Producto" /> */}</div>
              <div>{item.nombre}</div>
              <div>{item.cantidad}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
