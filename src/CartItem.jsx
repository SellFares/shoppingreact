import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Obtem os itens do carrinho do estado Redux

  // Calcula o total de todos os itens no carrinho
  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * parseFloat(item.cost.substring(1)); // Converte o custo de string para número e calcula
    });
    return total.toFixed(2);
  };

  // Incrementa a quantidade de um item
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrementa a quantidade ou remove o item se a quantidade for 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 })
      );
    } else {
      dispatch(removeItem(item.name)); // Remove o item se a quantidade for 0
    }
  };

  // Remove um item do carrinho
  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  // Calcula o subtotal de um item (quantidade * custo)
  const calculateSubtotal = (item) => {
    return (item.quantity * parseFloat(item.cost.substring(1))).toFixed(2);
  };

  // Função para continuar comprando
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(); // Chama a função passada pelo componente pai
  };

  // Função de checkout (opcional)
  const handleCheckoutShopping = (e) => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>Cost: {item.cost}</p>
                  <p>Subtotal: ${calculateSubtotal(item)}</p>
                  <div className="cart-item-controls">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <button onClick={() => handleRemove(item.name)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${calculateTotalAmount()}</h3>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
            <button onClick={handleCheckoutShopping}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
