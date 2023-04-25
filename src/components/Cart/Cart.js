//create a component for storing the products that will be displayed when user press add to cart button on Product.js component
//create a component for displaying the products that were added to the cart
import CartContext from "../Mycontext";
import { useContext } from "react";
import "./Cart.css";
function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const total = cart ? cart.reduce((acc, item) => acc + item.price, 0) : 0;

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cart && cart.map((item, index) => {
                    return (
                        <div className="CartList">
                            <li key={index}>
                                <img src={item.image} alt={item.title} />
                                {item.title} {item.price}$
                            </li>
                        </div>
                    )
                })}
            </ul>
            <h3>Total: {total}$</h3>
        </div>
    );
}

export default Cart;