import logo from "./logo.svg";
import "./App.css";
import other from "./components/TextDis";
import { useEffect, useState } from "react";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import CartContext  from "./components/Mycontext";
import PriceContext from "./components/Mycontext";
import Cart from "./components/Cart/Cart";
function App({}) {
    const [allProducts, setAllProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState(allProducts);
    const [category, setCategory] = useState("Show All");
    const [price, setPrice] = useState([0, 1000]);

    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => {
          return res.json();
        })
        .then((products_) => {
          setAllProducts(products_);
          setCurrentProducts(products_);
        });
        setCurrentProducts([...currentProducts].sort((a, b) => b.rating.rate*b.rating.count - a.rating.rate*a.rating.count));
    }, []);

    const filterByCategoryAndByPrice = (category, price) => {
        console.log(category, price);
        if (category === "Show All") {
            setCurrentProducts(allProducts.filter((product) => product.price >= price[0] && product.price <= price[1]));
            return;
        }
        setCurrentProducts(allProducts.filter((product) => product.category === category && product.price >= price[0] && product.price <= price[1]));
    }

    useEffect(() => {
        filterByCategoryAndByPrice(category, price);
    }, [category,price]);

    const categories = allProducts
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index);
    categories.unshift("Show All");

  const handleSort = (sortOption) => {
    switch (sortOption) {
      case "top-rated":
        setCurrentProducts([...currentProducts].sort((a, b) => b.rating.rate*b.rating.count - a.rating.rate*a.rating.count));
        break;
      case "best-selling":
        setCurrentProducts([...currentProducts].sort((a, b) => b.rating.count - a.rating.count));
        break;
      case "a-z":
        setCurrentProducts([...currentProducts].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case "z-a":
        setCurrentProducts([...currentProducts].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case "price-low-high":
        setCurrentProducts([...currentProducts].sort((a, b) => a.price - b.price));
        break;
      case "price-high-low":
        setCurrentProducts([...currentProducts].sort((a, b) => b.price - a.price));
        break;
      default:
        setCurrentProducts(allProducts);
    }
  }

  const [cart, setCart] = useState([]);

  return (
        <CartContext.Provider value={{cart, setCart}}>
        <PriceContext.Provider value={{price, setPrice}}>
          <div className="App">
            <Header categoriesList={categories} handleCategory={setCategory} handleSort={handleSort} />
            <Products productsList={currentProducts} />
              <Cart/>
          </div>
        </PriceContext.Provider>
        </CartContext.Provider>
  );
}
export default App;