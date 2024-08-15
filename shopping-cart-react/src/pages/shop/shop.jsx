import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

export const Shop = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Gaming PCs</h1>
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.productImage}
              />
            </Link>
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.productPrice}>{product.price}</p>
          </div>
        ))}
      </div>
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
    textAlign: "center",
    marginBottom: "20px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: "auto",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  productName: {
    fontSize: "1.5em",
    margin: "10px 0",
  },
  productPrice: {
    fontSize: "1.2em",
    color: "#007bff",
  },
};
