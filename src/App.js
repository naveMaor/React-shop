import logo from "./logo.svg";
import "./App.css";
import other from "./components/TextDis";
import { useEffect, useState } from "react";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import CartContext  from "./components/Mycontext";
import Cart from "./components/Cart/Cart";
function App({}) {
    const [allProducts, setAllProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState(allProducts);


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

    const categories = allProducts
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index);
    categories.unshift("Show All");

  const filterByCategory = (category) => {
        if(category === "Show All")
            setCurrentProducts(allProducts);
        else
            setCurrentProducts(allProducts.filter((product) => product.category === category));
  };

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
          <div className="App">
            <Header categoriesList={categories} handleCategory={filterByCategory} handleSort={handleSort} />
            <Products productsList={currentProducts} />
              <Cart/>
          </div>
        </CartContext.Provider>
  );
}
export default App;