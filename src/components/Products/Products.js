import "./Products.css";
import Product from "../Product/Product";
import React from "react";

function Products({ productsList }) {
    return (
        <section className="products">
            {productsList.map((product,key) => (
                <Product key={key}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    rating={product.rating}
                />
            ))}
        </section>
    );
}
export default Products;