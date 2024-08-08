import React from "react";

export const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>
        Welcome to our computer store! We are dedicated to providing the best
        products and services to our customers.
      </p>
      <p>
        Our team of experts is here to help you with all your computer needs,
        whether you are looking for a new laptop, a custom-built desktop, or
        need assistance with repairs and upgrades.
      </p>
      <p>Thank you for choosing our store. We look forward to serving you!</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
};
