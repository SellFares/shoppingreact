import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import './CartItem.css';

const CartItem = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);

    const handleRemove = (item) => {
        dispatch(removeItem(item));
    };

    const handleQuantityChange = (item, quantity) => {
        dispatch(updateQuantity({ name: item.name, quantity }));
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                items.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>${item.cost}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                                min="1"
                            />
                            <button onClick={() => handleRemove(item)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartItem;
