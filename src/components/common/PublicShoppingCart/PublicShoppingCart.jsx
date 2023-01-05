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
            <div className="Shopping-Cart-item">
              <div className="Shopping-Cart-item-image">
                {/* <img src={item.imagen} alt="Imagen Producto" /> */}
              </div>
              <span className="Shopping-Cart-item-name">{item.nombre}</span>
              <span className="Shopping-Cart-item-amount">{item.cantidad}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
