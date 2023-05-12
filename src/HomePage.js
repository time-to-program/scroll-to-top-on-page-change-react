import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <div style={styles.box}>HOME PAGE</div>
      <div style={styles.box}>HOME PAGE</div>
      <div style={styles.box}>HOME PAGE</div>
      <div style={{ ...styles.box, backgroundColor: "#BED7BA" }}>
        <button onClick={navigateToAbout}>Go to About</button>
      </div>
    </div>
  );
}

export default HomePage;

const styles = {
  box: {
    width: "100%",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F0E9",
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: '30px'
  },
};
