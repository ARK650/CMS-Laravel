import React, { useEffect, useRef } from "react";

export const Contact = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const apiKey = "PpDChYT6c91XSGejfORMaPycOP5KFNCIyYsdmdXf0_o";

    const platform = new window.H.service.Platform({
      apikey: apiKey,
    });

    const defaultLayers = platform.createDefaultLayers();
    const map = new window.H.Map(
      mapContainerRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 52.5159, lng: 13.3777 },
        zoom: 14,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    window.addEventListener("resize", () => map.getViewPort().resize());
    const behavior = new window.H.mapevents.Behavior(
      new window.H.mapevents.MapEvents(map)
    );
    const ui = window.H.ui.UI.createDefault(map, defaultLayers);

    return () => {
      map.dispose();
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.paragraph}>
        If you have any questions or need assistance, please contact us at:
      </p>
      <p style={styles.paragraph}>
        Email:{" "}
        <a href="mailto:support@mycomputerstore.com" style={styles.link}>
          support@mycomputerstore.com
        </a>
      </p>
      <p style={styles.paragraph}>
        Phone:{" "}
        <a href="tel:+1234567890" style={styles.link}>
          (123) 456-7890
        </a>
      </p>
      <div ref={mapContainerRef} style={styles.mapContainer}></div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2em",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  mapContainer: {
    width: "100%",
    height: "400px",
    marginTop: "20px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};
