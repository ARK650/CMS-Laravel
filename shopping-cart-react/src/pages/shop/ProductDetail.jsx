import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";

export const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{product.name}</h1>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <p style={styles.price}>{product.price}</p>
      <p style={styles.description}>{product.description}</p>
      <ul style={styles.specsList}>
        <li>
          <strong>CPU:</strong> {product.cpu}
        </li>
        <li>
          <strong>GPU:</strong> {product.gpu}
        </li>
        <li>
          <strong>RAM:</strong> {product.ram}
        </li>
        <li>
          <strong>Storage:</strong> {product.storage}
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
  },
  header: {
    fontSize: "2.5em",
    marginBottom: "20px",
  },
  productImage: {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  price: {
    fontSize: "1.5em",
    color: "#007bff",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2em",
    marginBottom: "20px",
  },
  specsList: {
    listStyleType: "none",
    padding: 0,
    fontSize: "1.1em",
  },
};
